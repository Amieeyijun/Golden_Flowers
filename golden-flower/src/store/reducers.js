let storedata = {
    list: []
}
export default (state = storedata, action) => {
    // 按照传过来的action，做相关的逻辑处理
    let newStoreData = [];
    switch (action.type) {
        case 'add_cart':
            newStoreData = JSON.parse(JSON.stringify(state));
            newStoreData.list.push(action.value);
            console.log(newStoreData)
            return newStoreData;
        case 'del_cart':
            newStoreData = JSON.parse(JSON.stringify(state));
            newStoreData.list.splice(action.value, 1)
            return newStoreData;
        default:
            break;
    }
    return state;
}