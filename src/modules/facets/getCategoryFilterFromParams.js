export default function(searchParams) {
    const multi  = searchParams['facet.multilevel'];
    let val = searchParams["category-filter"];
    let newObj = {};
    if(multi && val) {
        val = val.split(">")
        newObj[multi] = val;
    }
    return newObj;
};
