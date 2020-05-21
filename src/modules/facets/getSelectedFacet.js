export default function(name) {
    const facets = this.getFacets();
    return facets.find((facet) =>{
        const {
            facetName
        } = facet;
        return (facetName === name) ? facet : null;
    })
};
