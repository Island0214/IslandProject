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
        type: 'nav/showMain',
        payload: true
    }),
    hideMainView: () => ({
        type: 'nav/hideMain',
        payload: true
    }),

    showUIView: () => ({
        type: 'nav/showUI',
        payload: true
    }),
    hideUIView: () => ({
        type: 'nav/hideUI',
        payload: true
    }),
    showContactView: () => ({
        type: 'nav/showContact',
        payload: true
    }),
    hideContactView: () => ({
        type: 'nav/hideContact',
        payload: true
    }),
    showProjectView: () => ({
        type: 'nav/showProject',
        payload: true
    }),
    hideProjectView: () => ({
        type: 'nav/hideProject',
        payload: true
    }),
};

export default actions;