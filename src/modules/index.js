import urlMethods from './url';
import setPaginationMethods from './pagination';
import setSearchMethods from './search';
import setSwatchMethods from './swatches';
import setFacetMethods from './facets';
import setBreadCrumbs from './breadcrumbs';
import setSortMethods from './sort';
import setDidYouMeanMethods from './didyoumean';

const changeInput = function(value, evt) {
    this.state.userInput = value;
    this.callBack(value,evt)
};
const setMethods = (UnbxdSearch) => {
    const {
        prototype
    } = UnbxdSearch;
    prototype.changeInput = changeInput;
    urlMethods(prototype);
    setPaginationMethods(prototype);
    setSearchMethods(prototype);
    setSwatchMethods(prototype);
    setFacetMethods(prototype);
    setBreadCrumbs(prototype);
    setSortMethods(prototype);
    setDidYouMeanMethods(prototype)
}
export default setMethods;