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


            <Grid className={styles.mainPart}>
                {/*<Row className="show-grid">*/}

                            <Row className="show-grid demo-tbody" style={{padding: 0}} key="row">
                                <div className="queue-demo">

                                    <QueueAnim className="demo-content" delay={200}
                                               animConfig={[
                                                   {opacity: [1, 0], translateY: [0, 50]},
                                                   {opacity: [1, 0], translateY: [0, 50]}
                                               ]}
                                               interval={500}
                                    >
                                        <Col xs={12} sm={2} md={2} lg={2} key="1" className="demo-thead" style={{padding:0}}><br/>
                                            <div className={styles.sideBar}>
                                                <LeftNav/>
                                            </div>
                                        </Col>
                                    </QueueAnim>

                                    {/*<Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>*/}
                                        {/*<Clearfix visibleSmBlock></Clearfix>*/}
                                        <Col xs={12} sm={10} md={10} lg={10} key="2" className="demo-thead" style={{padding:0}}><br/>
                                            <div className={styles.content}></div>
                                        </Col>
                                        {/*/!*<Clearfix visibleSmBlock></Clearfix>*!/*/}
                                        {/*<Col xs={12} sm={12} md={4} lg={4} key="3" className="demo-thead"><br/>*/}
                                            {/*<Card name="不想要" src="icon3"/>*/}

                                        {/*</Col>*/}

                                </div>
                            </Row>

            </Grid>


        )
    }
}


export default ContentPart