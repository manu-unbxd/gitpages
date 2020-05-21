# search-JS-core
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
  </pre>
</div>
  <h1>Get Methods</h1>
  <ul>
      <li>
          <strong>
              <pre>
                  unbxdCore.getResults("dress");
              </pre>
          </strong>
          <p>will fetch results based on query 'dress'</p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getPaginationInfo();
              </pre>
          </strong>
          <p>To get the pagination details</p>
      </li>
      <li>
              <strong><pre>
              unbxdCore.getBucketedFacets();
          </pre></strong>
          <p> retrieves category filter </p>
      </li>
      <li>
              <strong><pre>
              unbxdCore.getBreadCrumpsList();
          </pre></strong>
          <p> get breadcrumps from results </p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getRangeFacets();
              </pre>
          </strong>
          <p>brings range facets</p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getFacets();
              </pre>
          </strong>
          <p>brings facets</p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getDidYouMeanFromResponse();
              </pre>
          </strong>
          <p>brings did you mean details</p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getSpellCheckSuggested();
              </pre>
          </strong>
          <p>to get spell check details</p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getSelectedBucketedFacet();
              </pre>
          </strong>
          <p>brings selected category filters</p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getSelectedFacets();
              </pre>
          </strong>
          <p>brings selected filters</p>
      </li>
      <li>
          <strong>
              <pre>
                  unbxdCore.getSelectedFacet(facetName);
              </pre>
          </strong>
          <p>brings the specific facet information by facet name</p>
      </li>
      <li>
              <strong>
                  <pre>
                      unbxdCore.findSelectedFacet(facetName);
                  </pre>
              </strong>
              <p>brings the specific facet information from selected facets using facetname</p>
          </li>
          <li>
                  <strong>
                      <pre>
                          unbxdCore.getFacetByValue(facetName, valueName);
                      </pre>
                  </strong>
                  <p>brings the specific facet information from selected facets using facetname and facetvalue</p>
              </li>
  </ul>
