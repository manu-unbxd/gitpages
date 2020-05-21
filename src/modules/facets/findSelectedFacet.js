/**
* @description 
* to get the selected facet values
* accepts a string
* @param {string} parent eg:color_facet 
*/
export default function(selected) {
    //items.findIndex(x => x.id == item.id);
    return this.state.selectedFacets[selected];
};
