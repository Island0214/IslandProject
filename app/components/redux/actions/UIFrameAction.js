// let FSA = {
//     type: 'ACTION_NAME',
//     payload: <bool | number | string | object>, //action的负载，可以是数据或 error 对象
//     error: <bool>, // 指明该action是否是一个以 error 为负载的action
//     meta: <string> // action元数据， 包含解释该action含义的信息
// }

let actions = {
    pickApple: function() {

        return function(dispatch, getState) {
            alert('hahaha');
        }
    },

    showMainView: () => ({
        type: 'nav/ShowMain',
        payload: true
    }),

    hideMainView: () => ({
        type: 'nav/hideMain',
        payload: false
    }),

};

export default actions;