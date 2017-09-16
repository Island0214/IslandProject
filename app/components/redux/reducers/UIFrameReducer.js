import { fromJS } from 'immutable';


const initialState = {
    showMain: true,
    showLeftNav: false,
    showContactView: false
    // newAppleId: 3,
    // apples: [
    //     {
    //         id: 0,
    //         weight: 233,
    //         isEaten: false
    //     },
    //     {
    //         id: 1,
    //         weight: 235,
    //         isEaten: true
    //     },
    //     {
    //         id: 2,
    //         weight: 256,
    //         isEaten: false
    //     }
    // ]
};

export default (state = initialState, action) => {

    let newState ;

    switch (action.type) {

        case 'nav/ShowMain':

            /** 将isPicking设置true */
            return fromJS(state).set('showMain', true).toJS();

        case 'nav/hideMain':

            /** 将isPicking设置true */
            return fromJS(state).set('showMain', false).toJS();


        default:
            return state;
    }

};
