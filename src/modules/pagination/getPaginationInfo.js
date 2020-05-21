export default function()  {
    const resp =  this.getSearchResults();
    const {
        numberOfProducts,
        start,
        products
    } = resp;
    const rows = this.options.noOfProducts;
    const noOfPages = Math.floor(numberOfProducts/rows)+1;
    let currentPage = Math.floor(start/rows)+1;
    const isNext = ( (start+rows) >= numberOfProducts || start >= numberOfProducts) ? false : true;
    const isPrev = ( (start - rows) < 0 || start <= 0) ? false : true;
    return {
        numberOfProducts,
        start,
        productsLn:products.length,
        rows,
        noOfPages,
        currentPage,
        isNext,
        isPrev
    };
};
