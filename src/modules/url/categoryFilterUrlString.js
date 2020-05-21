export default function() {
    const {
        categoryFilter
    } = this.state;
    let str = "";
    const keys = Object.keys(categoryFilter);
    keys.forEach((key,index) => {
        const valStr = categoryFilter[key].map((item,index) => {
            let it = encodeURIComponent(item)
            if(index > 0){
                it = ">"+it
            }
            return it
        })
        str += "&category-filter="+valStr.join("")
    })
    return str;
};
