import getDidYouMeanFromResponse from './getDidYouMeanFromResponse';
import getSpellCheckSuggested from './getSpellCheckSuggested';

const setDidYouMeanMethods = (prototype) => {
    prototype = Object.assign(prototype, {
        getDidYouMeanFromResponse,
        getSpellCheckSuggested
    })
}
export {
    setDidYouMeanMethods as default,
    getDidYouMeanFromResponse,
    getSpellCheckSuggested
};
