import React from 'react';
import style from './Myfamily.module.css'
import {Icon} from 'antd';
export default function Myfamily(props) {
    return (
        <div className={style.myfamily}>
            <div className={style.function}>
                <img src="https://i03piccdn.sogoucdn.com/6c751b465e1471e6" alt="" />
                <img src="https://i03piccdn.sogoucdn.com/fcfc8c1abc16da97" alt="" />
                <img src="https://i01piccdn.sogoucdn.com/b4da995e8f5ca697" alt="" />
                <img src="https://i01piccdn.sogoucdn.com/9e06212ef29057d3" alt="" />
                <div>
                    <span><a href="#">写游记</a></span>
                    <span><a href="#">问达人</a></span>
                    <span><a href="#">添加足迹</a></span>
                    <span><a href="#">发布结伴</a></span>
                </div>
            </div>
            <div className={style.myboth}>
                <p><strong>{props.name}</strong>,这里是你的【窝】!</p>
                <p>是记录你的旅行记忆，结交各路豪杰的地盘儿。</p>
                <p>现在开启马蜂窝旅程！</p>
                <div className={style.Tmodel}>
                    <div>
                        <img src="https://i03piccdn.sogoucdn.com/58ba42363e773435" alt="" />
                        <div>
                            <p>做一个有“脸面”的人<br />
                            上传头像，完善资料！
                            </p>
                        </div>
                        <div>
                            <a role="button" title="完善个人资料">完善个人资料</a>
                        </div>
                    </div>
                    <div>
                        <img src="https://i03piccdn.sogoucdn.com/d24606edf0c71d7f" alt="" />
                        <div>
                            <p>这潜伏着哪些大神？<br />
                            他们都怎么玩儿？
                            </p>
                        </div>
                        <div>
                            <a role="button" title="逛逛达人">逛逛达人</a>
                        </div>
                    </div>
                    <div>
                        <img src="https://i01piccdn.sogoucdn.com/b0f7ea1f4ea519ad" alt="" />
                        <div>
                            <p>Gloden升级有礼包。<br />
                            第一步，从打卡开始。
                            </p>
                        </div>
                        <div>
                            <a role="button"  title="打卡赚特惠">打卡赚特惠</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={style.peopleTalk}>
                <p><a href="#">叶小梦是大吃货</a>
                发表了新游记 <a href="#">叮~请查收一份深圳暑期打卡圣地指南</a> <span>2019-07-25 09:54:11</span></p>
                <p><a href="#">塞班岛小胖</a>
                发表了新游记 <a href="#">海陆空——体验不一样的塞班岛，来塞班岛感受一下别...</a> <span>2019-05-21 09:40:47</span></p>
                <p><a href="#">塞班岛小胖</a>
                回答了  <a href="#">旅行一定要长假？你有哪些三天就玩得很好的旅行经历？</a>问题 <span>2019-05-21 00:55:25</span></p>
                <p><a href="#">叶小梦是大吃货</a>
                发表了新游记 <a href="#">叮~请查收一份来自台湾的文艺漫步指南——大吃货带...</a> <span>2019-04-18 00:14:50</span></p>
            </div>

            <div className={style.mytravel}>
                <div>
                    <h2>我的游记</h2>
                    <div><Icon type="edit" />写游记</div>
                </div>
                <img src="http://css.mafengwo.net/images/home_new2015/noyj_v2.jpg" alt=""/>
                <div className={style.del}>
                <Icon type="delete" /><h4><a href="#">已删除游记</a> </h4>
                </div>
            </div>

        </div>

    )
}