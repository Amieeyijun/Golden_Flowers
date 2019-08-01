import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import style from './Rousel.module.css'

class Rousel extends Component {
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.state = {
            videos: [false, false, false, false]
        }
    }
    change(current) {
        this.state.videos.map((item, index) => {
            if (index == current) {
                this.setState({
                   
                })
            }
        })
    }
    render() {
        if (this.state.videos[0]) {
            this.video0 = <video src={require('../../video/Mexico.mp4')} autoPlay muted height='200px' width='256px'> </video>
        } else {
            this.video0 = <img src={require('../../imgs/mexico.jpeg')} />
        }
        if (this.state.videos[1]) {
            this.video1 = <video src={require('../../video/food.mp4')} autoPlay muted height='200px' width='256px'> </video>
        } else {
            this.video1 = <img src={require('../../imgs/food.jpg')} />
        }
        if (this.state.videos[2]) {
            this.video2 = <video src={require('../../video/Mexico.mp4')} autoPlay muted height='200px' width='256px'> </video>
        } else {
            this.video2 = <img src={require('../../imgs/street.jpg')} />
        }
        if (this.state.videos[3]) {
            this.video3 = <video src={require('../../video/Mexico.mp4')} autoPlay muted height='200px' width='256px'> </video>
        } else {
            this.video3 = <img src={require('../../imgs/ouside.jpg')} />
        }
        return (
            <div>
                {/* 轮播图 */}
                <div className={style.contain}>
                    <Carousel afterChange={this.change} dots='false' autoplay interval="1000">
                        <div className={style.rousels}>
                            <span>1/Aug.2019</span>
                            <span>Indulge in the old days of Maya</span>
                            <p>see the colorful world of Mexico</p>
                            <div >
                                <Link to='/###'>READ MORE</Link>
                            </div>
                            <img src={require('../../imgs/1.jpg')} />
                        </div>
                        <div className={style.rousels}>
                            <span>29/Jul.2019</span>
                            <span>In the shunde</span>
                            <p>I have a dream of gaining 10kg in 2 days</p>
                            <div >
                                <Link to='/###'>READ MORE</Link>
                            </div>
                            <img src={require('../../imgs/2.jpg')} />
                        </div>
                        <div className={style.rousels}>
                            <span>31/Jul.2019</span>
                            <span>Georgia</span>
                            <p>The night without wine has no temperature</p>
                            <div >
                                <Link to='/###'>READ MORE</Link>
                            </div>
                            <img src={require('../../imgs/3.jpg')} />
                        </div>
                        <div className={style.rousels}>
                            <span>30/Jul.2019</span>
                            <span>To the heart</span>
                            <p>Don't take it too seriously</p>
                            <div >
                                <Link to='/###'>READ MORE</Link>
                            </div>
                            <img src={require('../../imgs/4.jpg')} />
                        </div>
                    </Carousel>
                    {/* 与轮播图对应的视频 */}
                    <div className={style.linkage}>
                        <div>
                            {this.video0}
                        </div>
                        <div>
                            {this.video1}
                        </div>
                        <div>
                            {this.video2}
                        </div>
                        <div>
                            {this.video3}
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Rousel;