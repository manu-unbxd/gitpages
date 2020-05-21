export default function() {
    const responseObj = this.getResponseObj();
    if(responseObj) {
        const {
            facets
        } = responseObj;
        if(facets && facets.text && facets.text.list){
            return facets.text.list
        } else{
            return []
        }
    }
    return [];
};
