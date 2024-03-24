import React from 'react'
import style from './styles.module.scss';

const Statistics = () => {

    return (
        <div className={style.statistics}>

            <div className={style.statistics_item}>
                <div className={style.item_info}>
                    <span className={style.icon1}>
                        $
                    </span>
                    <div className={style.value}>9.02</div>
                    <span>B</span>
                </div>
                <div className={style.text}>
                    24S İşlem Hacmi
                </div>
            </div>

            <div className={style.statistics_item}>
                <div className={style.item_info}>
                    <div className={style.value}>1700</div>
                    <span className={style.icon2}>+</span>
                </div>
                <div className={style.text}>
                Listelenmiş kripto para birimi
                </div>
            </div>

            <div className={style.statistics_item}>
                <div className={style.item_info}>
                    <div className={style.value}>14</div>
                    <span className={style.icon2}>+</span>
                    <span>M</span>
                </div>
                <div className={style.text}>
                Kayıtlı Kullanıcı
                </div>
            </div>

            <div className={style.statistics_item}>
                <div className={style.item_info}>
                    <div className={style.value}>87.6</div>
                    <span>%</span>
                </div>
                <div className={style.text}>
                Simple Earn APR
                </div>
            </div>

        </div>
    )
}

export default Statistics