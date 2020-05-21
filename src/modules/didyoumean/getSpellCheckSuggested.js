/**
*  @description 
* will return did you mean text. 
*example:
   <pre>
        <code style='color:red'>
             "black"
        </code>
    </pre>
    * @method getDidYouMeanFromResponse 
*/

export default function() {
    const arr = this.state.didYouMean;
    if(arr && arr[0]) {
        return arr[0].suggestion;
    }
    return "";
};
