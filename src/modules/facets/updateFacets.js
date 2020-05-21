export default function(selectedFacet) {
    const {
        selectedFacets
    } = this.state;
    const {
        selectedFacetName
    } = selectedFacet;
    let selectedFacetId = "";
    let selectedFacetdataId = "";
    const selectedFacetVal = this.getSelectedFacetValue(selectedFacet);
    if(selectedFacetVal) {
        const {
            name,
            dataId
        } = selectedFacetVal;
        selectedFacetId = name;
        selectedFacetdataId = dataId;
    }
    if(!selectedFacets[selectedFacetName]){
        selectedFacets[selectedFacetName] = [
            {
                name:selectedFacetId,
                dataId:selectedFacetdataId
            }
        ];
    } else {
        selectedFacets[selectedFacetName].push({
            name:selectedFacetId,
            dataId:selectedFacetdataId
        })
    }
    this.setPageStart(0);
    this.getResults.bind(this)();
};
