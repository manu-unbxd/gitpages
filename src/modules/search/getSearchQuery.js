export default function() {
    const searchQ = this.getSearchQueryParams();
    return searchQ.q || "";
};
