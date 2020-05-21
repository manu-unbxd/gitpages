export default function(action = {}) {
    let {
        parent = null,
        level = null,
        name = null
    } = action;
    if(level) {
        if(this.state.categoryFilter[parent]) {
            level = Number(level);
            this.state.categoryFilter[parent][level-1]= name;
        } else {
            this.state.categoryFilter[parent] = [name];
        }
    }
};
