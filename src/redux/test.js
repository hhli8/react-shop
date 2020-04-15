const addGUN = 'addGUN';
const removeGUN = 'removeGUN';

//reducer
export function counter(state=10, action) {
    switch(action.type) {
        case addGUN: 
        return state+1;
        case removeGUN: 
        return state-1;
        default :
        return state
    }
}

//action创建函数
export function addGun() {
    return { type: addGUN }
}
