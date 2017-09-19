import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import styles from '../css/main.css';//导入
import {Grid, Row, Col, Clearfix} from "react-bootstrap";
import QueueAnim from 'rc-queue-anim';
import actions from '../redux/actions/UIFrameAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];


// MainPart.propTypes = {
//     value: PropTypes.bool.isRequired,
// };


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: this.props.src ? this.props.src : '',
            show: true

        };
        this.animation = {blur: '10px', yoyo: true, repeat: -1, duration: 1000};
    }

    // onClick = () => {
    //     this.setState({
    //         show: !this.state.show
    //     });
    // }
    handleMouseOver = (e) => {
        this.setState({
            show: false
        });
        // alert('enter');
        // this.setState({
        //     detailShow: 'block',
        //     x: e.pageX, //pageX是以html左上角为原点，相应的clientX是以浏览器左上角为原点
        //     y: e.pageY,
        // })
    };

    handleMouseOut = () => {
        this.setState({
            show: true
        });
    };

    render() {
        var index = this.props.src;

        // let img = require(src);
        return (
            <div className={styles.singlePanel}>
                <div className={styles.card} onMouseEnter={this.handleMouseOver}
                     onMouseLeave={this.handleMouseOut}>
                    <div className="queue-demo">

                        <QueueAnim className="demo-content" delay={500} animConfig={[
                            {opacity: [1, 0], translateY: [0, 100]},
                            {opacity: [1, 0], translateY: [0, -100]}
                        ]}>
                            {this.state.show ? [
                                    <img key="11" src={require('../images/' + index + '.png')}/>
                                ] :
                                <div key="21">
                                    <div className={styles.info}>
                                        <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                                    </div>
                                </div>
                            }
                        </QueueAnim>
                    </div>
                    <p>{this.props.name}</p>

                </div>
            </div>

        )
    }
}

class MainPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    render() {
        let {state} = this.props;

        // let mockState = {
        //     showMain: true,
        //     showLeftNav: false,
        //     showContactView: false
        // };
        //
        // state = this.props;

        return (
            <div>
                {state.showMain ? [
                    <div className="queue-demo">
                        <QueueAnim className="demo-content" delay={0}
                                   animConfig={[
                                       {opacity: [1, 0], translateY: [0, 50]},
                                       {opacity: [1, 0], translateX: [0, 500]}
                                   ]}>
                            <Grid>
                                <Row className="show-grid">
                                    <div className="queue-demo">
                                        <QueueAnim className="demo-content" delay={500}
                                                   animConfig={[
                                                       {opacity: [1, 0], translateY: [0, 50]},
                                                       {opacity: [1, 0], translateY: [0, -50]}
                                                   ]}>
                                            <Col xs={12} sm={12} md={4} lg={4} key="1"><br/>
                                                <Card name="不知道" src="icon1" content="Sadasf"/>
                                            </Col>
                                            {/*<Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>*/}
                                            {/*<Clearfix visibleSmBlock></Clearfix>*/}
                                            <Col xs={12} sm={12} md={4} lg={4} key="2"><br/>
                                                <Card name="不明了" src="icon2"/>
                                            </Col>
                                            {/*<Clearfix visibleSmBlock></Clearfix>*/}
                                            <Col xs={12} sm={12} md={4} lg={4} key="3"><br/>
                                                <Card name="不想要" src="icon3"/>

                                            </Col>
                                        </QueueAnim>
                                    </div>
                                </Row>
                                {/*<Row className="show-grid">*/}
                                {/*<Col xs={12} sm={12} md={6} lg={6}><br/></Col>*/}
                                {/*/!*<Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>*!/*/}
                                {/*<Clearfix visibleSmBlock></Clearfix>*/}
                                {/*<Col xs={6} sm={6} md={3} lg={3}><br/>b</Col>*/}
                                {/*<Col xs={6} sm={6} md={3} lg={3}><br/>c</Col>*/}
                                {/*</Row>*/}
                            </Grid>
                        </QueueAnim>
                    </div>
                ] : null}
            </div>
        )
    }
}

// function select(state) {
//     return {
//         state: state.MainPart
//     }
// }
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


export default connect(selectState, buildActionDispatcher)(MainPart)