export default function() {
    if(this.options.fields){
        return "&fields="+this.options.fields.join(",");
    }
    return "";
};
