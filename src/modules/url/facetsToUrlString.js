export default function() {
    let facetUrl = "";
    const {
        selectedFacets,
    } = this.state;
    const keys = Object.keys(selectedFacets)
    keys.forEach((key) => {
        const facet = selectedFacets[key];
        facetUrl+='&filter=';
        facet.forEach((item,index) => {
            const {
                name
            } = item;
            if(index === 0) {
                facetUrl+= key+':"'+JSON.stringify(name).replace('"','')
            } else {
                facetUrl+= ' OR ' + key+':"'+JSON.stringify(name).replace('"','')
            }

        })
    });
    return facetUrl;
};
