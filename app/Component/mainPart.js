import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import config from './config.json';
import styles from './main.css';//导入
import {Grid, Row, Col, Clearfix} from "react-bootstrap";
import QueueAnim from 'rc-queue-anim';

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

class MainPart extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">

                    <div className="queue-demo">
                        <QueueAnim className="demo-content" delay={500}
                                   animConfig={[
                                       {opacity: [1, 0], translateY: [0, 50]},
                                       {opacity: [1, 0], translateY: [0, -50]}
                                   ]}>
                            <Col xs={12} sm={12} md={4} lg={4} key="1"><br/>
                                <div className={styles.singlePanel}>
                                    <div className={styles.card}>

                                    </div>

                                </div>
                            </Col>
                            {/*<Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>*/}
                            <Clearfix visibleSmBlock></Clearfix>
                            <Col xs={12} sm={12} md={4} lg={4} key="2"><br/>
                                <div className={styles.singlePanel}>

                                </div>
                            </Col>
                            <Clearfix visibleSmBlock></Clearfix>
                            <Col xs={12} sm={12} md={4} lg={4} key="3"><br/>
                                <div className={styles.singlePanel}>

                                </div>
                            </Col> </QueueAnim>
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
        );
    }
}

export default MainPart