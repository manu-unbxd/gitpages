import getBaseUrl from './getBaseUrl';
import extraParamUrlString from './extraParamsFromUrlToString';
import renderFromUrl from './setStateFromUrl';
import getQueryParams from './getQueryParams';
import getDefaultFiltersStr from './getDefaultFiltersString';
import urlFlattenFacets from './facetsToUrlString';
import getFieldsStr from './fieldsToUrlString';
import getNoOfResultsStr from './getNumberOfProdcutsUrlString';
import getPageStartStr from './getPaginationStartStringUrl';
import getNewUrlState from './getNewUrlState';
import getRangeFilterStr from './getRangeFilterString';
import categoryFilterUrlStr from './categoryFilterUrlString';
import getSortUrlString from './getSortUrlString';

const methods = {
    extraParamUrlString,
    renderFromUrl,
    getQueryParams,
    urlFlattenFacets,
    getDefaultFiltersStr,
    getFieldsStr,
    getNoOfResultsStr,
    getPageStartStr,
    getNewUrlState,
    getRangeFilterStr,
    categoryFilterUrlStr,
    getSortUrlString,
    getBaseUrl
};
const urlMethods = (prototype) => {
    prototype = Object.assign(prototype, methods)
}
export  {
    urlMethods as default,
    methods
};
