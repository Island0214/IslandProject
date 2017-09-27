import React, {Component} from 'react'
import QueueAnim from 'rc-queue-anim';
import styles from '../css/main.css';//使用require导入css文件
import actions from '../redux/actions/UIFrameAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

class HelloTitle extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {state} = this.props;


        return (

            <div className="queue-demo">
                <QueueAnim className="demo-content" delay={100}
                           animConfig={[
                               {opacity: [1, 0], translateY: [0, 50]},
                               {opacity: [1, 0], translateY: [0, 50]}
                           ]}>
                    {state.showMain ? [
                        <p key="0" className={styles.titleP}>ISLAND<br/>PROJECT</p>
                    ] : null
                    }
                </QueueAnim>
            </div>
        );
    }
}

function selectState(state) {
    return {
        state: state.uiFrameReducer
    }
}

function buildActionDispatcher(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


export default connect(selectState, buildActionDispatcher)(HelloTitle)
