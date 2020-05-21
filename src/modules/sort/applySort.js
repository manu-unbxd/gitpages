export default function(sortItem) {
    this.setSort(sortItem);
    this.setPageStart(0);
    this.getResults.bind(this)();
}