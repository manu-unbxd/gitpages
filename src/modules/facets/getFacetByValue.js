export default function (facetName,valueName) {
    const selectedfacetInfo = this.getSelectedFacet(facetName) || {
        facetName:facetName
    };
    let actualFound = false;
    let selectedFound = null;
        const {
            values = []
        } = selectedfacetInfo;

        let foundId =  {
            name:valueName
        };
        if(values.length > 0) {
            actualFound = true
            foundId = values.find(function(e) { return e.name == valueName});
        }
        if(foundId) {
            selectedFound = {
                ...selectedfacetInfo,
                selectedvalue:foundId,
                actualFound
            }
        }
    return selectedFound;
};
