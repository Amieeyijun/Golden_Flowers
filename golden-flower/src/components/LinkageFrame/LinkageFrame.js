import React, { Component } from 'react';
import style from "./LinkageFrame.module.css";
import { Icon } from 'antd';
import { Carousel } from 'antd';
import { withRouter } from "react-router-dom";
class LinkageFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconcolor: "#D5D5D5",
            placedetail: [],
            travels: [],
            detaildisplay: "none",
            placeData: [
                {
                    img: require("../../imgs/TAM.png"),
                    place: "国内旅游",
                    scene: ["三亚", "丽江", "厦门", "成都", "西安"],
                    detailData: [
                        [
                            {
                                placetitle: "热门",
                                placeitem: [
                                    "三亚", "丽江", "厦门", "成都", "西安", "长白山", "北京", "大理", "桂林"
                                ]
                            },
                            {
                                placetitle: "海南",
                                placeitem: [
                                    "三亚", "亚龙湾", "海口", "蜈支洲岛", "三亚湾", "西沙"
                                ]
                            },
                            {
                                placetitle: "西南",
                                placeitem: [
                                    "西藏", "拉萨", "林芝", "成都", "重庆", "贵州", "贵阳", "黄果树"
                                ]
                            },
                            {
                                placetitle: "江浙沪",
                                placeitem: [
                                    "杭州", "上海", "南京", "苏州", "乌镇", "千岛湖", "西塘", "横店", "桂林"
                                ]
                            },
                            {
                                placetitle: "西北",
                                placeitem: [
                                    "西安", "青海湖", "西宁", "新疆", "敦煌", "乌鲁木齐", "潼关"
                                ]
                            }
                        ],
                        [
                            {
                                detailsTitle: "如何准备一场乌镇之旅？",
                                detailsInfo: "说到去乌镇面临的最大的一个问题，那就是东栅和西栅之间到底该怎么选择怎么安排。"

                            },
                            {
                                detailsTitle: "苏州两日游，看完这个就出发！",
                                detailsInfo: "找个时间，说走就走，走去那个曾经画在梦里的江南古城。"

                            },
                            {
                                detailsTitle: "玩转蜈支洲岛，看这一篇就够了！",
                                detailsInfo: "选择岛屿景区，蜈支洲岛是来到三亚不可错过的地方。那么，如何玩转蜈支洲岛？"

                            }
                        ]
                    ]
                },
                {
                    img: require("../../imgs/JD.png"),
                    place: "日本",
                    scene: ["东京", "大阪", "冲绳", "北海道"],
                    detailData: [
                        [
                            {
                                placetitle: "热门",
                                placeitem: [
                                    "三亚", "丽江", "厦门", "成都", "西安", "长白山", "北京", "大理", "桂林"
                                ]
                            },
                        ],
                        [
                            {
                                detailsTitle: "札幌吃蟹指南告诉你，北海道不仅只有蟹道乐",
                                detailsInfo: "北海道的海鲜料理登峰造极，除了鱼料之外在北海道最著名的就是蟹料理。但是，很多到北海道的游客只知道蟹道乐，其实，除了蟹道乐，北海道还有其他更为美味的蟹料理店。札幌作为北海道的中心，其蟹料理店更是多如繁星。"

                            }
                        ]
                    ]



                },
                {
                    img: require("../../imgs/HK.png"),
                    place: "香港 澳门 台湾",
                    scene: ["台北", "垦丁", "高雄", "香港", "迪士尼"],
                    detailData: [
                        [
                            {
                                placetitle: "香港 澳门",
                                placeitem: [
                                    "香港", "澳门"
                                ]
                            },
                            {
                                placetitle: "台湾",
                                placeitem: [
                                    "台北", "垦丁", "高雄", "花莲", "南投"
                                ]
                            }
                        ],
                        [
                            {
                                detailsTitle: "台北交通总攻略，市区及周边全含",
                                detailsInfo: "第一次玩台北对交通完全不熟悉？这次为大家整理了机场至台北市区交通、台北捷运、观光巴士路线，以及如何查询台北公交车，准备要去台北游玩的你，绝对不能错过这篇交通攻略！"

                            }
                        ]
                    ]
                },
                {
                    img: require("../../imgs/QM.png"),
                    place: "东南亚 南亚 泰国",
                    scene: ["普吉岛", "巴厘岛", "马尔代夫"],
                    detailData: [
                        [
                            {
                                placetitle: "泰国",
                                placeitem: [
                                    "普吉岛", "清迈", "苏梅岛", "曼谷", "甲米", "芭提雅", "象岛"
                                ]
                            },
                            {
                                placetitle: "南亚",
                                placeitem: [
                                    "马尔代夫", "尼泊尔", "印度"
                                ]
                            },
                            {
                                placetitle: "越南老挝",
                                placeitem: [
                                    "越南", "芽庄", "柬埔寨", "缅甸", "老挝", "河内", "金边"
                                ]
                            },
                            {
                                placetitle: "菲律宾|文莱",
                                placeitem: [
                                    "菲律宾", "长滩岛", "杜马盖地", "薄荷岛", "文莱"
                                ]
                            },
                            {
                                placetitle: "印尼|马来|新加坡",
                                placeitem: [
                                    "巴厘岛", "马来西亚", "沙巴", "仙本那", "兰卡威", "印度尼西亚"
                                ]
                            }
                        ],
                        [
                            {
                                detailsTitle: "泰国最全美食攻略：小吃夜市、海鲜、甜品…快get起来",
                                detailsInfo: "玩转泰国，吃遍曼谷……"

                            }, {
                                detailsTitle: "普吉岛｜这些拥有私密沙滩的酒店让你再也不人挤人！",
                                detailsInfo: "住进这些酒店，分分钟独享沙滩——再也不用在海里下饺子！"

                            }
                        ]
                    ]



                },
                {
                    img: require("../../imgs/ZYNS.png"),
                    place: "欧洲 美洲",
                    scene: ["美国", "英国", "法国", "意大利", "德国"],
                    detailData: [
                        [
                            {
                                placetitle: "欧洲",
                                placeitem: [
                                    "英国", "法国", "意大利", "芬兰", "德国", "俄罗斯", "土耳其", "希腊", "冰岛", "瑞士", "西班牙", "伦敦", "巴黎", "圣托尼里", "罗马", "捷克", "奥地利", "丹麦", "匈牙利", "荷兰", "普罗旺斯", "比利时", "巴塞罗那", "贝加尔湖", "马德里", "葡萄牙", "波兰", "爱尔兰"
                                ]
                            },
                            {
                                placetitle: "美洲",
                                placeitem: [
                                    "美国", "加拿大", "洛杉矶", "旧金山", "纽约", "塞班岛", "迈阿密", "古巴", "墨西哥", "拉斯维加斯", "芝加哥", "秘鲁", "西雅图", "夏威夷"
                                ]
                            }
                        ],
                        [
                            {
                                detailsTitle: "来塞班岛必看 | 史上超全旅行实用干货！",
                                detailsInfo: "一篇来自塞班岛的旅行最全攻略玩法，来塞班岛必看 手把手教你如何深度游塞班，吃、住、行、游玩超全。"
                            }
                        ]
                    ]
                },
                {
                    img: require("../../imgs/XNGJY.png"),
                    place: "澳洲 中东 亚洲",
                    scene: ["澳大利亚", "毛里求斯"],
                    detailData: [
                        [
                            {
                                placetitle: "澳洲",
                                placeitem: [
                                    "澳大利亚", "新西兰", "墨尔本", "悉尼", "奥克兰", "悉尼歌剧院", "皇后镇", "大堡礁", "斐济", "里斯本", "凯恩斯", "大溪地", "珀斯"
                                ]
                            },
                            {
                                placetitle: "中东",
                                placeitem: [
                                    "土耳其", "迪拜", "阿布扎比", "阿联酋", "以色列"
                                ]
                            },
                            {
                                placetitle: "非洲",
                                placeitem: [
                                    "毛里求斯", "塞舌尔", "埃及", "摩洛哥", "南非", "马达加斯加", "突尼斯", "肯尼亚"
                                ]
                            }
                        ],
                        [
                            {
                                detailsTitle: "盘点全球沙漠旅游地，推荐国内外适合旅游的沙漠景观",
                                detailsInfo: "地球上荒凉的地形中，沙漠一直高居榜首，无论是大漠孤烟直，长河落日圆，还是穷荒绝漠鸟不飞，万碛千山梦犹懒，在我们的视野里，大漠一直远在边陲。"
                            }
                        ]
                    ]
                },
                {
                    img: require("../../imgs/MEDF.png"),
                    place: "热门海岛",
                    scene: ["巴厘岛", "普吉岛", "塞班", "斐济"],
                    detailData: [
                        [
                            {
                                placetitle: "当季热门",
                                placeitem: [
                                    "普吉岛", "巴厘岛", "苏梅岛", "塞班岛", "长滩岛", "斐济", "关岛", "夏威夷"
                                ]
                            },
                            {
                                placetitle: "高端奢华",
                                placeitem: [
                                    "马尔代夫", "毛里求斯", "大溪地", "塞舌尔"
                                ]
                            },
                            {
                                placetitle: "马尔代夫",
                                placeitem: [
                                    "阿玛瑞岛", "库拉玛缇岛", "双鱼岛", "中央格兰德", "蓝色美人蕉", "薇拉瓦鲁岛", "泰姬珊瑚岛", "鲁滨逊岛", "蜜月岛", "香格里拉岛", "安嘎嘎岛", "宁静岛", "白马庄岛", "班度仕岛"
                                ]
                            }
                        ],
                        [
                            {
                                detailsTitle: "游玩+娱乐+购物，海陆空玩转亚庇超全指南！",
                                detailsInfo: "亚庇多元化的旅行体验，都很值得让人停下脚步，深入了解一下。"
                            },
                            {
                                detailsTitle: "超全C位涠洲岛攻略，不来围观了解一下？",
                                detailsInfo: "史上最强涠洲攻略，杠精看了都哭了！"
                            },
                            {
                                detailsTitle: "玩转蜈支洲岛，看这一篇就够了！",
                                detailsInfo: "这里有灿烂的阳光、柔软的沙滩，碧绿的海水；丰富的海上休闲娱乐项目，海底保护很好的珊瑚礁，成熟的服务设施；更重要的是有浓郁的度假氛围。"
                            }
                        ]
                    ]
                }
            ]
        };
        this.showdetail = this.showdetail.bind(this);
        this.toDetails = this.toDetails.bind(this);
        this.detaildisplaynone = this.detaildisplaynone.bind(this);
        this.changecolor = this.changecolor.bind(this);
    }
    showdetail(index) {
        let placedetail = this.state.placeData[index].detailData[0];
        let travels = this.state.placeData[index].detailData[1];

        this.setState({
            placedetail: placedetail,
            travels: travels,
            detaildisplay: "block"
        })

        this.refs['icon' + index].style.color = "#ff9d00";
        this.refs['myborder' + index].style.borderRight = "1px solid white"


    }
    changecolor(index) {
        this.refs['icon' + index].style.color = "inherit";
        this.refs['myborder' + index].style.borderRight = "1px solid #ff9d00"

    }
    detaildisplaynone() {
        this.setState({
            detaildisplay: "none"
        })
    }
    toDetails(title) {
        this.props.history.push("/travelsdetail?title=" + title)
    }
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.guidebox}>
                        {
                            this.state.placeData.map((item, index) => {


                                return (
                                    <div className={style.guideitem} onMouseEnter={() => { this.showdetail(index) }} onMouseLeave={() => { this.changecolor(index) }} ref={`myborder${index}`} key={index}>
                                        <div className={style.imgbox}>
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className={style.textbox}>
                                            <h3>{item.place}</h3>
                                            <p>
                                                {
                                                    item.scene.map((ite, index) => {
                                                        return (
                                                            <a href="#" key={index}>{ite}</a>
                                                        )
                                                    })
                                                }
                                            </p>

                                        </div>
                                        <div className={style.myicon} ref={`icon${index}`}>
                                            <Icon type="right" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{ display: this.state.detaildisplay }} onMouseLeave={this.detaildisplaynone}>
                        <div className={style.detailbox}>
                            <div className={style.place}>
                                {
                                    this.state.placedetail.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.placetitle} > {item.placetitle}</div>
                                                <div className={style.placeitem}>
                                                    <ul>
                                                        {
                                                            item.placeitem.map((ite, index) => {
                                                                return (
                                                                    <li key={index}><a href="#">{ite}</a></li>
                                                                )
                                                            })
                                                        }



                                                    </ul>


                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className={style.travels}>
                                <div className={style.travelstitle}>精彩专题</div>
                                <div>
                                    <ul>
                                        {
                                            this.state.travels.map((item, index) => {
                                                return (
                                                    <li onClick={() => { (this.toDetails(item.detailsTitle)) }} key={index}>
                                                        <div>
                                                            <a href="javascript:void(0); " className={style.detailsTitle}>
                                                                {item.detailsTitle}
                                                            </a>
                                                        </div>
                                                        <div style={{ fontSize: "12px", color: "#6A6A6A" }}>{item.detailsInfo}</div>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={style.carouselbox}>

                        <Carousel autoplay>
                            <div>
                                <img src="https://p2-q.mafengwo.net/s13/M00/B5/04/wKgEaVzj2veAPGeeAAC__vr9NLg98.jpeg?imageMogr2%2Fthumbnail%2F%21730x405r%2Fgravity%2FCenter%2Fcrop%2F%21730x405%2Fquality%2F100" />
                            </div>
                            <div>
                                <img src="https://b3-q.mafengwo.net/s14/M00/27/BE/wKgE2l01KMaAN2LrAAbXYVWkC4Q56.jpeg" />
                            </div>
                            <div>
                                <img src="https://n3-q.mafengwo.net/s11/M00/5B/93/wKgBEFzxEHaAafiWAALlb-0-QCE43.jpeg" />
                            </div>
                            <div>
                                <img src="https://p4-q.mafengwo.net/s14/M00/52/1D/wKgE2l01OB2AF9tMAANZFR_ERgs36.jpeg" />
                            </div>
                        </Carousel>
                    </div>
                </div>

            </div >
        );
    }
}

export default withRouter(LinkageFrame);