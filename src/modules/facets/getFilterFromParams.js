export default function(filters = []) {
    const self = this;
    let selectedFilters = {};
    let rangeFacet = {};
    if(typeof filters === "string") {
        filters = Array(filters)
    }
    filters.forEach((filter,index) => {
        const filterStrArr = filter.split(" OR ");
        filterStrArr.forEach((item,index) => {
            const arr = item.split(":");
            if(arr.length === 2) {
                arr[1] = arr[1].replace(/(^")|("$)/g, '').replace(/\"{2,}/g, '"').replace(/\\\"/g, '"').replace(/(^\[)|(\]$)/g, '');
                const isRange = arr[1].indexOf("TO") > 0 ? true : false;
                if(isRange) {
                    const range = arr[1].split(" TO ");
                    rangeFacet[arr[0]] = "["+Number(range[0])+" TO "+ Number(range[1]) +"]"
                    //"["+start+" TO "+ end +"]"
                } else {
                    const facetInfo = self.getFacetByValue(arr[0], arr[1]);
                    if(facetInfo) {
                        const {
                            facetName,
                            selectedvalue
                        } = facetInfo;
                        if(selectedFilters[facetName]) {
                            selectedFilters[facetName].push(selectedvalue);
                        } else {
                            selectedFilters[facetName] = Array(selectedvalue);
                        }
                    }

                }
            }
        })

    })
    return {
        selectedFilters,
        rangeFacet
    };
};
