const modifyValues = (values = []) =>{
    let valuesList = [];
    values.forEach((value, index) => {
        const data = value;
        let prevData = ""
        if(index % 2 === 1) {
            prevData = values[index-1];
            valuesList.push({
                name:prevData,
                count:data,
                dataId:index
            });
        }
    });
     return valuesList
}
const modifyFacetsList = (facets = []) => {
     let facetList = [];
     facets.forEach((facet, index) => {
         const {
            values
         } = facet;
         facet.values = modifyValues(values);
         facetList.push(facet);
    });
     return facetList
 }

 export {
     modifyFacetsList,
     modifyValues
 };