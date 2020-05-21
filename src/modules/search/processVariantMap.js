export default function(resp = {}) {
    const self = this;
    if(resp.response && resp.response.products) {
        let mappedProducts = resp.response.products.map((item) => {
            const {
                variants = [],
                relevantDocument
            } = item;
            let newObj =  item;
            if(relevantDocument === "variant" && variants.length >0) {
                const varObj = variants[0];
                const vMap = self.options.variantMapping;
                const obArr = Object.keys(vMap);
                obArr.forEach((keyItem) => {
                    const mapKey = vMap[keyItem];
                    newObj[keyItem] = varObj[mapKey];
                })
            }
            return newObj;
        });
        resp.response.products = mappedProducts;
    } 
    return resp
};
