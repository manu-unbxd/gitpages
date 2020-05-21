import {
    options
} from './config';
import setMethods from "./modules/index";

/**
 * Represents the Unbxd wrapper around the api.
 * @constructor
 */
class UnbxdSearch {
    constructor(props) {
        this.options = Object.assign({},options,props);
        this.state = {
            userInput : '',
            responseObj:null,
            selectedFacets:{},
            currentUrl:'',
            didYouMean:null,
            startPageNo: this.options.startPageNo || 0,
            isLoading: false,
            selectedSort:'',
            isUrlUpdated:false,
            rangeSliderList:[],
            rangeFacet:{},
            categoryFilter:{},
            breadcrumbs :{} 
        }
        const {
            queryString
        } = this.options;
        this.url = this.getBaseUrl()+queryString;
    }
    /**
     *  @returns the response {object}.
     */
    getResponseObj() {
        const {
            responseObj
        } = this.state;
        return responseObj || null;
    }
    setUrl() {
        const searchUrlHash = this.options.searchQueryParam+ this.state.currentUrl.split("?q")[1];
        location.hash = searchUrlHash;
    }
    /**
     *  @returns the response {object}.
     */
    callBack(value, evt){
        const {
            callBackFn
        } = this.options;
        callBackFn(this, evt);
    }
}
setMethods(UnbxdSearch);
export default UnbxdSearch;
