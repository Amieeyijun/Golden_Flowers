import React, { Component } from 'react';
import style from './Japen.module.css'

class Japen extends Component {
    render() {
        return (
            <div>
                <div className={style.main}>
                    <div className={style.product_img}>
                        <img src="https://b2-q.mafengwo.net/s11/M00/6A/14/wKgBEFsOYY-AR81qAACZE-_DH0k95.jpeg" />
                    </div>
                    <div className={style.product_con}>
                        <div className={style.name}>
                            京都
                        </div>
                        <span>
                            京都是日本传统文化的中心，这里有上千年的历史古建筑，穿着和服踏着小碎步的少女，代表日本料理最高水平的怀石料理等等。毋庸置疑，京都一定是日本行程中，不可错过的目的地
                     </span>

                    </div>

                </div>

            </div>
        );
    }
}

export default Japen;