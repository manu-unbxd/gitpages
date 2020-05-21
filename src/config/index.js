const options = {
    siteName:'api key',
    siteKey:'site key',
    isFlag:true,
    sdkHostName:'https://search.unbxd.io/',
    queryString:'/search?q=',
    searchQueryParam:'q',
    fields:['title'],
    defaultFilters:null,
    spellCheck:false,
    noOfProducts:5,
    startPageNo:0,
    facetMultiSelect: true,
    facetMultiSelectionMode:true,
    searchQueryParam:null,
    updateUrls:true,
    variants:false,
    variantMapping:{},
    variantConfig: {
        count:1
    },
    extraParams:'',
    facetMultilevel:true,
    facetDepth:6,
    productId:'uniqueId',
    swatches:true,
    swatchMap:{},
    callBackFn:() => {}
}
export default {
    options
};
