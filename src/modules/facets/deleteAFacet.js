/**
* @description 
* to clear a selected facet value
* @method deleteAFacet
* @param {string} facetName eg:v_unbxd_parentcolours_uFilter 
* @param {string} value eg:black
*/
export default function(facetName, value) {
    this.deleteFacet(facetName, value);
    this.setPageStart(0);
    this.getResults.bind(this)();
};
