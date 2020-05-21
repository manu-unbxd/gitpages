import {
    modifyFacetsList
} from './utils';
export default function() {
    const resp = this.getResponseObj();
    if(resp && resp.facets && resp.facets.multilevel) {
        const bucket = resp.facets.multilevel.bucket || [];
        return modifyFacetsList(bucket);
    }
    return [];
};
