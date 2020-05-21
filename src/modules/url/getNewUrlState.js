export default function() {
    const value = this.state.userInput;
    const facetsUrlString = this.urlFlattenFacets();
    const fieldsStr = this.getFieldsStr()+this.getDefaultFiltersStr();
    const sortStr = this.getSortUrlString();
    const rangeFilterUrlStr = this.getRangeFilterStr();
    const categoryFilterStr = this.categoryFilterUrlStr();
    let fctmulty = (this.options.facetMultiSelect)?"&facet.multiselect=true":"";
    this.state.currentUrl = 
        this.url+
        value+
        categoryFilterStr+
        fctmulty+
        facetsUrlString+
        fieldsStr+
        sortStr+
        rangeFilterUrlStr+
        this.getNoOfResultsStr()+
        this.getPageStartStr()+
        this.extraParamUrlString();
    return this.state.currentUrl ;
};
