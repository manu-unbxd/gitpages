export default function() {
    const {
        rangeFacet
    } = this.state;
    const keysMap = Object.keys(rangeFacet);
    let str ="";
    keysMap.forEach(item => {
        str+="&filter="+item+":"+rangeFacet[item]
    })
    return str;
};
