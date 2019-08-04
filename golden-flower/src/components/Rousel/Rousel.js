import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'
import style from './Rousel.module.css'

class Rousel extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.pre = this.pre.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            videos: [false, false, false, false]
        };
        this.choose = ''
    }
    change(e) {
        console.log(666)
        console.log(e.target.alt)
        this.choose.slick.slickGoTo((e.target.alt))
    }
    pre() {
        this.choose.slick.slickPrev()
    }
    next() {
        this.choose.slick.slickNext()
    }
    render() {
        if (this.state.videos[0]) {
            this.video0 = <video src={require('../../video/Mexico.mp4')} autoPlay muted height='200px' width='256px'> </video>
        } else {
            this.video0 = <img src={require('../../imgs/mexico.jpeg')} alt="0" />
        }
        return (
            <div>
                {/* 轮播图 */}
                <div className={style.contain}>
                    <Carousel dots='false' autoplay interval="1000" ref={el => { this.choose = el }}>
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
                            <span>Hey! Here comes the light</span>
                            <p>Indulge in watching the sea in Japan</p>
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
                    <div className={style.linkage} onClick={this.change}>
                        <div>
                            <img src={require('../../imgs/mexico.jpeg')} alt="0" />
                            <div className={style.first} >
                                <span>UNFORGOTTEN</span>
                                <span>WILL BE RESPONSING</span>
                                <p>|</p>
                                <span>Aug 1, 2019  /  625 Likes</span>
                            </div>
                        </div>
                        <div >
                            <img src={require('../../imgs/food.jpg')} alt="1" />
                            <div className={style.second}>
                                <span>EARLY SUMMER</span>
                                <span>LOOKING CHILDHOOD FLAVORS</span>
                                <p>|</p>
                                <span>Jul 29, 2019  /  200 Likes</span>
                            </div>
                        </div>
                        <div >
                            <img src={require('../../imgs/street.jpeg')} alt="2" />
                            <div className={style.third} >
                                <span>KAMAKURA</span>
                                <span>DAILY LIFE COULD HAPPEN</span>
                                <p>|</p>
                                <span>Jul 31, 2019  /  365 Likes</span>
                            </div>
                        </div>
                        <div >
                            <img src={require('../../imgs/ouside.jpg')} alt="3" />
                            <div className={style.forth}>
                                <span>TIME GOES</span>
                                <span>LOVE FOR  U NEVER CHANGES </span>
                                <p>|</p>
                                <span>Jul 30, 2019  /  544 Likes</span>
                            </div>
                        </div>
                    </div>
                    {/* 前一张，后一张 */}
                    <div className={style.pre} onClick={this.pre}>
                        <img src={require('../../imgs/pre.png')} alt="" />
                    </div>
                    <div className={style.next} onClick={this.next}>
                        <img src={require('../../imgs/next.png')} alt="" />
                    </div>


                </div>
            </div>
        );
    }
}

export default Rousel;