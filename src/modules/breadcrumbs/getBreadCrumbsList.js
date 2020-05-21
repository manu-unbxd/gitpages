
export default function(){
    const data = this.getBreadCrumbs();
    let arr = [];
    let temp = data;
    for(let i=0;i<this.options.facetDepth;i++){
        if(temp.level) {
            const {
                level,
                values,
                filterField
            } = temp;
            arr.push({
                level,
                filterField,
                value:values[0].value
            })
        }
        if(temp.child) {
            temp = temp.child;  
        } else {
            break;
        }
    }
    return arr;
};
