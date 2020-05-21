import getSearchMeta from './getSearchMetaDetails';
import getSearchResults from './getSearchResults';
import getSearchQueryParams from './getSearchQueryParams';
import getSearchQuery from  './getSearchQuery';
import getResults from './getResultsFromApi';
import processVariantMap from './processVariantMap';
import getProductByPropValue from './getProductByPropValue';
import setStateFromData from './setStateFromData';

const setSearchMethods = (prototype) => {
    prototype = Object.assign(prototype, {
        getSearchResults,
        getSearchMeta,
        getSearchQueryParams,
        getSearchQuery,
        getResults,
        processVariantMap,
        getProductByPropValue,
        setStateFromData
    });
}
export {
    setSearchMethods as default,
    getSearchResults,
    getSearchMeta,
    getSearchQueryParams,
    getSearchQuery,
    getResults,
    processVariantMap,
    getProductByPropValue,
    setStateFromData
};
