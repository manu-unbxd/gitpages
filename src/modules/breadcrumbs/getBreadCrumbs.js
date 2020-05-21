/**
*  @description 
* will return breadcrumbs object if it is available. in following format.
*example:
   <pre>
        <code>
        {
            "filterField": "categoryPath",
            "values": [
                {
                "value": "Dress"
                }
            ],
            "child": {
                "filterField": "categoryPath",
                "values": [
                {
                    "value": "Short Sleeves"
                }
                ],
                "level": 2
            },
            "level": 1
        }
        </code>
    </pre>
    * @method getBreadCrumbs 
*/

export default function() {
    const resp = this.getResponseObj();
    if(resp && resp.facets && resp.facets.multilevel) {
        return resp.facets.multilevel.breadcrumb || [];
    }
    return [];
};
