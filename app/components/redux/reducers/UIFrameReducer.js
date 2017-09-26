import { fromJS } from 'immutable';


const initialState = {
    showMain: true,
    showProject: false,
    showContact: false,
    showUI: false
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

        case 'nav/showMain':
            return fromJS(state).set('showMain', true).toJS();
        case 'nav/hideMain':
            return fromJS(state).set('showMain', false).toJS();

        case 'nav/showProject':
            return fromJS(state).set('showProject', true).toJS();
        case 'nav/hideProject':
            return fromJS(state).set('showProject', false).toJS();

        case 'nav/showUI':
            return fromJS(state).set('showUI', true).toJS();
        case 'nav/hideUI':
            return fromJS(state).set('showUI', false).toJS();

        case 'nav/showContact':
            return fromJS(state).set('showContact', true).toJS();
        case 'nav/hideContact':
            return fromJS(state).set('showContact', false).toJS();

        default:
            return state;
    }

};
