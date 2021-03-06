<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/v/@unbxd-ui/vanilla-search-library?color=blue">
</a>
<a href="https://www.npmjs.com/package/@unbxd-ui/vanilla-search-library">
  <img alt="npm" src="https://img.shields.io/npm/l/@unbxd-ui/vanilla-search-library">
</a>



| Option                	| Datatype 	| Description                                                                                                                                                                                                                                                                                                                                     	|
|-----------------------	|----------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| searchBoxSelector     	| Element  	| requires an html element. Search input will be captured from this element eg:document.getElementById("unbxdInput")                                                                                                                                                                                                                              	|
| searchTrigger         	| String   	| requires an event name. search will be triggered after this event triggered eg:'click'                                                                                                                                                                                                                                                          	|
| siteKey               	| String   	| given site key                                                                                                                                                                                                                                                                                                                                  	|
| apiKey                	| String   	| given api key                                                                                                                                                                                                                                                                                                                                   	|
| sdkHostName           	| String   	| api domain                                                                                                                                                                                                                                                                                                                                      	|
| productType           	| String   	| SEARCH or BROWSE or CATEGORY                                                                                                                                                                                                                                                                                                                    	|
| searchQueryParam      	| String   	| search term will be appended to this.                                                                                                                                                                                                                                                                                                           	|
| searchResultsSelector 	| Element  	| requires an html element. products will be rendered here. eg:document.getElementById("searchResultsWrapper")                                                                                                                                                                                                                                    	|
| searchResultsTemplate 	| function 	| this function has two parameters. product and idx product is the each product object. idx is the index 
```js
function(product,idx){
  const {  uniqueId,  title  } = product;
   return `<div id="${uniqueId}" data-prank="${idx}" data-item="product" class="product-item">
    <h3>${title}</h3>
    </div>`;
 } ``` 	|
|                       	|          	|                                                                                                                                                                                                                                                                                                                                                 	|



# gitpages
Core library for Search JS
steps to run :
<ol>
  <li> clone the repo </li>
<li> npm install</li>
<li> npm start to run in developement environment</li>
<li> npm run build to generate the bundle</li>
 <ol>


 <h3>Basic Implementation</h3>
  <div>
  <pre style="white-space: pre;">
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
              }
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
      <h3>Api Documentation</h3>
      <a href="https://manu-unbxd.github.io/gitpages/">Api</a>
  </pre>
</div>
