export default function() {
    const searchParams = this.getSearchQueryParams();
    const {
        q,
        filter
    } = searchParams;
    this.state.userInput = q;
    const facets = this.getFilterFromParams(filter);
    this.state.rangeFacet = facets.rangeFacet;
    this.state.selectedFacets = facets.selectedFilters;
    this.state.categoryFilter = this.getCategoryFilterFromParams(searchParams);
    this.state.breadcrumbs = this.getBreadCrumbs()
};
