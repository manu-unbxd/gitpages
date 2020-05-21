export default function(rangeFacet){
    const {
        start,
        end,
        facetName
    } = rangeFacet
    this.state.rangeFacet[facetName] = "["+start+" TO "+ end +"]";
};
