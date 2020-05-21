import getBucketedFacets from './getBucketedFacets';
import getFilterFromParams from './getFilterFromParams';
import getCategoryFilterFromParams from './getCategoryFilterFromParams';
import getRangeFacets from './getRangeFacets';
import getFacets from './getFacets';
import getSelectedFacets from './getSelectedFacets';
import getSelectedFacet from './getSelectedFacet';
import updateFacets from './updateFacets';
import findSelectedFacet from './findSelectedFacet';
import deleteCategoryFilter from './deleteCategoryFilter';
import deleteFacet from './deleteFacet';
import getTheFacetTypeByNameId from './getTheFacetTypeByNameId';
import getFacetByValue from './getFacetByValue';
import getSelectedFacetValue from './getSelectedFacetValue';
import setCategoryFilter from './setCategoryFilter';
import setRangeFacet from './setRangeFacet';
import clearARangeFacet from './clearARangeFacet';
import deleteAFacet from './deleteAFacet';

const getSelectedBucketedFacet = function() {
    return this.state.categoryFilter
}
const applyRangeFacet  = function() {
    this.getResults.bind(this)();
}
const setFacetMethods = (prototype) => {
    prototype = Object.assign(prototype,{
        getBucketedFacets,
        getSelectedBucketedFacet,
        getFilterFromParams,
        getCategoryFilterFromParams,
        getRangeFacets,
        getFacets,
        getSelectedFacets,
        getSelectedFacet,
        updateFacets,
        findSelectedFacet,
        deleteCategoryFilter,
        deleteFacet,
        getTheFacetTypeByNameId,
        getFacetByValue,
        getSelectedFacetValue,
        setCategoryFilter,
        setRangeFacet,
        clearARangeFacet,
        deleteAFacet,
        applyRangeFacet
    })
}
export {
    setFacetMethods as default,
    getBucketedFacets,
    getSelectedBucketedFacet,
    getFilterFromParams,
    getCategoryFilterFromParams,
    getRangeFacets,
    getFacets,
    getSelectedFacets,
    getSelectedFacet,
    updateFacets,
    findSelectedFacet,
    deleteCategoryFilter,
    deleteFacet,
    getTheFacetTypeByNameId,
    getFacetByValue,
    getSelectedFacetValue,
    setCategoryFilter,
    setRangeFacet,
    clearARangeFacet,
    applyRangeFacet
};
