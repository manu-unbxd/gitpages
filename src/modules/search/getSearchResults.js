export default function() {
    const responseObj = this.getResponseObj();
    if(responseObj) {
        const {
            response
        } = responseObj;
        return response || null
    } else {
        return null
    }
};
