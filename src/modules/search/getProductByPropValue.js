export default function(prop, value) {
    const results = this.getSearchResults();
    const {
        products
    } = results
    return products.find((item)=> {
        return item[prop] === value
    })
};
