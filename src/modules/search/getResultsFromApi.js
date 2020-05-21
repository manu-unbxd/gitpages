import {
    events
} from './../../constants';
import {
    modifyFacetsList
} from '../facets/utils';

export default  function(query = "") {
    const {
        userInput
    } = this.state;
    const newVal = (query === "") ? userInput : query;
    this.state.userInput = newVal;
    
    this.state.currentUrl =this.getNewUrlState();
    this.state.isLoading = true;
    this.callBack(this, events.beforeApiCall);
    const fetchPromise = fetch(this.state.currentUrl);
    const self = this;
    fetchPromise.then(response => {
        return response.json();
    }).then(respJson => {
        this.state.isLoading = false;
        if(respJson) {
            if(this.options.variants) {
                respJson = this.processVariantMap(respJson);
            }
            this.state.responseObj = respJson;
            const didYouMean = this.getDidYouMeanFromResponse();
            if(this.options.spellCheck && didYouMean) {
                this.state.didYouMean = didYouMean;
                const suggStr = this.getSpellCheckSuggested();
                if(suggStr) {
                    this.getResults(this.getSpellCheckSuggested());
                    return false
                }
            }
            const facets = respJson.facets;
            if(facets) {
                const facetsList = this.getFacets();
                const newListFacet = modifyFacetsList.bind(this)(facetsList)
                respJson.facets =  {
                    ...facets,
                    text: {
                        list:newListFacet
                    }
                }
            }
            this.state.responseObj = respJson;
            this.setSort();
            this.setStateFromData();
            this.setUrl();
            this.callBack(self,events.afterApiCall);
        }
    }).catch(error => {
        console.log(this,error)
        this.state.isLoading = false;
        this.callBack(self,events.fetchError);
    });
};
