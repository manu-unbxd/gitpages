import setPageStart from './setPageStart';
import getPaginationInfo from './getPaginationInfo';
const setPaginationMethods = (prototype) => {
    Object.assign(prototype, {
        setPageStart,
        getPaginationInfo
    });
}
export {
    setPaginationMethods as default,
    setPageStart,
    getPaginationInfo
};
