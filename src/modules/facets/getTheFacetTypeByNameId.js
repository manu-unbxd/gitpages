export default function (facetName,valueId) {
    const selectedfacetInfo = this.getSelectedFacet(facetName);
    let selectedFound = null;
        const {
            values
        } = selectedfacetInfo;
        const foundId = values.find(function(e) { return e.dataId == valueId});
        if(foundId) {
            const selectedfacet = this.findSelectedFacet(facetName);
            if(selectedfacet){
                const {
                    name
                } = foundId
                selectedFound = selectedfacet.find((e) => { return e === name })
            }
        }
    return selectedFound;
};
