import React, {Component} from 'react'
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import '../css/picDetails.css'
const textData = {
    title: 'Appliances',
    color: '#e4f3f7',
    titleColor: '#becef3'
};
let dataArray = [
    {
        image: '1/818',
        content: 'AAAAAAAA'
    },
    {
        image: '1/819',
        content: 'BBBBBBBB'
    },
    {
        image: '1/820',
        content: 'CCCCCCCC'
    },
    {
        image: '1/821',
        content: 'DDDDDDDD'
    },
    {
        image: '1/822',
        content: 'EEEEEEEE'
    },
    {
        image: '1/823',
        content: 'FFFFFFFF'
    },
    {
        image: '1/824',
        content: 'GGGGGGGG'
    },
    {
        image: '1/825',
        content: 'HHHHHHHH'
    },
    // { image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png' },
    // { image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png' },
    // { image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png' },
    // { image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));
class PicDetails extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'pic-details-demo',
    };

    constructor(props) {
        super(props);
        this.state = {
            picOpen: {},
        };
    }

    onImgClick = (e, i) => {
        const picOpen = this.state.picOpen;
        Object.keys(picOpen).forEach((key) => {
            if (key !== i && picOpen[key]) {
                picOpen[key] = false;
            }
        });
        picOpen[i] = true;
        this.setState({
            picOpen,
        });
    };

    onClose = (e, i) => {
        const picOpen = this.state.picOpen;
        picOpen[i] = false;
        this.setState({
            picOpen,
        });
    };

    onTweenEnd = (i) => {
        const picOpen = this.state.picOpen;
        delete picOpen[i];
        this.setState({
            picOpen,
        });
    };

    getDelay = (e) => {
        const i = e.index + dataArray.length % 4;
        return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
    };

    getLiChildren = () => {
        const imgWidth = 150;
        const imgHeight = 150;
        const imgBoxWidth = 150;
        const imgBoxHeight = 150;
        return dataArray.map((item, i) => {
            const { image, title, content, color, titleColor } = item;
            const isEnter = typeof this.state.picOpen[i] === 'boolean';
            const isOpen = this.state.picOpen[i];

            const left = isEnter ? 0 : imgBoxWidth * (i % 4);
            const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
            const isRight = Math.floor((i % 4) / 2);
            const isTop = Math.floor(i / 4);
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;

            const liStyle = isEnter ? { width: '100%', height: 300, zIndex: 1 } : null;
            const liAnimation = isOpen ?
                ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
                ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
            let aAnimation = isEnter ?
                ({
                    delay: 400,
                    ease: 'easeInOutCubic',
                    width: imgWidth,
                    height: imgHeight,
                    onComplete: this.onTweenEnd.bind(this, i),
                    left: imgBoxWidth * (i % 4),
                    top: isTop ? imgBoxHeight : 0,
                }) : null;
            aAnimation = isOpen ?
                ({
                    ease: 'easeInOutCubic',
                    left: isRight ? (imgBoxWidth * 2) + 20 : 0,
                    width: '50%',
                    height: 300,
                    top: 0,
                }) : aAnimation;

            // 位置 js 控制；
            return (<TweenOne
                key={i}
                style={{
                    left,
                    top,
                    ...liStyle,
                }}
                component="li"
                className={isOpen ? 'open' : ''}
                animation={liAnimation}
            >
                <TweenOne
                    component="a"
                    onClick={e => this.onImgClick(e, i)}
                    style={{
                        left: imgLeft,
                        top: imgTop,
                    }}
                    animation={aAnimation}
                >
                    <img src={require('../images/' + image + '.png')} width="100%" height="100%" />
                </TweenOne>
                <TweenOneGroup
                    enter={[
                        { opacity: 0, duration: 0, type: 'from', delay: 400 },
                        { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
                    ]}
                    leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
                    component=""
                >
                    {isOpen && <div
                        className={`${this.props.className}-text-wrapper`}
                        key="text"
                        style={{
                            left: isRight ? '0%' : '50%',
                        }}
                    >
                        <h1 style={{color: titleColor}}>{title}</h1>
                        <Icon type="cross" onClick={e => this.onClose(e, i)} />
                        <em style={{background: color}} />
                        <p>{content}</p>
                    </div>}
                </TweenOneGroup>
            </TweenOne>);
        });
    };

    render() {
        return (<div>
            <div className={`${this.props.className}-wrapper`}>
                <div className={this.props.className}>
                    {/*<div className={`${this.props.className}-header`}>*/}
                        {/*<ul>*/}
                            {/*<li />*/}
                            {/*<li />*/}
                            {/*<li />*/}
                            {/*<li />*/}
                            {/*<li />*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                    {/*<QueueAnim type="bottom" className={`${this.props.className}-title`}>*/}
                        {/*<h1 key="h1">Motion Design</h1>*/}
                        {/*<p key="p">The react animation solution</p>*/}
                    {/*</QueueAnim>*/}
                    <QueueAnim
                        delay={this.getDelay}
                        component="ul"
                        className={`${this.props.className}-image-wrapper`}
                        interval={0}
                        type="bottom"
                    >
                        {this.getLiChildren()}
                    </QueueAnim>
                </div>
            </div>
        </div>);
    }
}

export default PicDetails
