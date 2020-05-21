export default function(){
    let loadFromUrl = false;
    const urlParts = this.getQueryParams()
    if(typeof urlParts === 'object') {
        const {
            q,
            filter,
            sort,
            start
        } = urlParts;
        loadFromUrl = true
        if(this.state.userInput !== q){
            this.state.userInput = q;
        }
        const facets = this.getFilterFromParams(filter);
        this.state.rangeFacet = facets.rangeFacet;
        this.state.selectedFacets = facets.selectedFilters;
        this.state.selectedSort = (sort)?sort:"";
        this.state.startPageNo = start? start:0;
        this.state.categoryFilter = this.getCategoryFilterFromParams(urlParts)
    }
    if(loadFromUrl) {
        this.getResults()
    }
};
