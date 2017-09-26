import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import styles from '../css/main.css';//导入
import {Grid, Row, Col, Clearfix} from "react-bootstrap";
import QueueAnim from 'rc-queue-anim';
import actions from '../redux/actions/UIFrameAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import LeftNav from '../js/leftNav.js'

class ContentPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowSize: true
        };
        if (document.documentElement.clientWidth < 992) {
            this.state.windowSize = false;
        }

    }

    onWindowResize = () => {
        // window.document.body.
        if (this.state.windowSize == true && document.documentElement.clientWidth <= 992) {
            this.setState({
                windowSize: false
            });

        }

        if (this.state.windowSize == false && document.documentElement.clientWidth > 992) {
            this.setState({
                windowSize: true
            });
        }
    }


    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
    }

    render() {
        let {state} = this.props;

        return (


            <Grid className={styles.mainPart}>
                {/*<Row className="show-grid">*/}
                {state.showUI ? [

                <Row className="show-grid demo-tbody" style={{padding: 0}} key="row">
                    {/*<div className="queue-demo">*/}

                        <QueueAnim delay={500}
                                   animConfig={[
                                       {opacity: [1, 0], translateX: [0, -50]},
                                       {opacity: [1, 0], translateX: [0, -50]}
                                   ]}
                                   interval={500}
                                   duration={1000}
                        >
                            {this.state.windowSize ? [
                                <Col xs={12} sm={12} md={2} lg={2} key="1" className="demo-thead" style={{
                                    padding: 0,
                                    position: 'fixed',
                                    overflow: 'auto',
                                    top: '50px',
                                    bottom: '15px',
                                    backgroundColor: '#ffffff',
                                    borderRight: '5px solid #d3e8e8',
                                    borderBottom: '5px solid #d3e8e8'
                                }}><br/>
                                    <div className={styles.sideBar}>
                                        <LeftNav/>
                                    </div>
                                </Col>
                            ] : [
                                <Col xs={12} sm={12} md={2} lg={2} key="1" className="demo-thead" style={{
                                    padding: 0,
                                    position: 'static',
                                    overflow: 'auto',
                                    backgroundColor: '#ffffff',
                                    borderRight: '5px solid #d3e8e8'
                                }}><br/>
                                    <div className={styles.sideBar}>
                                        <LeftNav/>
                                    </div>
                                </Col>
                            ]
                            }

                        </QueueAnim>

                    {/*<QueueAnim delay={200}*/}
                    {/*animConfig={[*/}
                    {/*{opacity: [1, 0], translateX: [0, -50]},*/}
                    {/*{opacity: [1, 0], translateX: [0, -50]}*/}
                    {/*]}*/}
                    {/*interval={500}*/}
                    {/*duration={1000}*/}
                    {/*>*/}
                    <QueueAnim delay={500}
                               animConfig={[
                                   {opacity: [1, 0], translateX: [0, 500]},
                                   {opacity: [1, 0], translateX: [0, 500]}
                               ]}
                               interval={500}
                               duration={1000}
                    >
                    {this.state.windowSize ? [
                        <Col xs={12} sm={12} md={10} lg={10} key="2" className="demo-thead" style={{
                            padding: 0,
                            position: 'fixed',
                            overflow: 'auto',
                            top: '50px',
                            bottom: '15px',
                            backgroundColor: '#ffffff',
                            right: '0'
                        }}><br/>
                            <div className={styles.content}></div>
                        </Col>
                    ] : [
                        <Col xs={12} sm={12} md={10} lg={10} key="1" className="demo-thead" style={{
                            padding: 0,
                            position: 'static',
                            overflow: 'auto',
                            backgroundColor: '#ffffff',
                        }}><br/>
                            <div className={styles.content}></div>
                        </Col>
                    ]
                    }
                    </QueueAnim>


                </Row>
                ] : null}

            </Grid>


        )
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


export default connect(selectState, buildActionDispatcher)(ContentPart)
