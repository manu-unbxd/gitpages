import UnbxdSearch from "../src/index";
const unbxdCallback = (obj) =>{
    console.log(obj,"unbxdCallback")
}
const unbxdCore =  new UnbxdSearch({
    siteName:"prod-kookai-com-au4541568774205",
    siteKey:"1c406c7058fdd75c04293fa87c2f9720",
    sdkHostName:"https://search.unbxd.io/",
    queryString:"/search?q=",
    searchQueryParam:"q",
    updateUrls:true,
    productId:"uniqueId",
    mapping: {
        "title": ""
    },
    fields: ['title','uniqueId', 'published_at', 'imageUrl2', 'v_colour', 'imageUrl1', 'unbxd_price','price', 'sku', 'imageUrl','productUrlParent', 'categoryPath', 'relevantDocument', 'imageUrlMain', 'imageUrlHover', 'colours', 'collections', 'unbxd_parentcolours', 'v_unbxd_parentcolours', 'categoryPath1', 'categoryPath1_fq',  'categoryPath2_fq', 'productUrl', 'variantId', 'id', 'unbxd_sellingprice', 'v_sellingprice', 'variant_metadata', 'is_available', 'v_price'],
    platform: "IO",
    callBackFn:unbxdCallback,
    facetMultiSelect: true,
    facetMultiSelectionMode:true,
    defaultFilters :null,
    spellCheck: true,
    noOfProducts: 5,
    sortOptions : [
        {
            value:"price desc",
            text:"Price High to Low"
        },
        {
            value:"price asc",
            text:" Price Low to High"
        }/*,
        {
            value:"average_rating asc",
            text:" Rating Low to High"
        },
        {
            value:"average_rating desc",
            text:" Rating High to low"
        }*/
    ],
    variants:true,
    variantMapping:{
        "image_url":"v_image_url"
    },
    facetMultilevel: true,
    facetMultilevelName: 'category',
    bucketedFacetElem:"bucketFacetElem",
    extraParams :{
        "version":"V2",
        "facet.multilevel":"categoryPath",
        "f.categoryPath.displayName":"category",
        "f.categoryPath.max.depth":"4",
        "f.categoryPath.facet.limit":"100"
    },
    facetDepth:4,
    breadcrumb:true,
    swatches:false,
    swatchMap:{
        "swatchList":"colours",
        "swatchImgs":"variant_metadata",
        "swatchColors":"unbxd_parentcolours"
    }
});
/*defaultFilters :{
    "flag": "product"
},*/
window.unbxdCore = unbxdCore;
unbxdCore.changeInput("dress");
console.log(unbxdCore,"unbxd core")