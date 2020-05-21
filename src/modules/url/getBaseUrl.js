export default  function() {
    const {
        sdkHostName,
        siteName,
        siteKey
    } = this.options;
    return sdkHostName+siteKey+"/"+siteName
};
