import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from './styles.module.scss';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPlug } from '@fortawesome/free-solid-svg-icons';
import { faApple, faAndroid, faGooglePlay, faWindows } from '@fortawesome/free-brands-svg-icons';

const KriptoAlımSatım = () => {

    const techs = [
        {
            id: 1,
            logo: <FontAwesomeIcon icon={faApple} />,
            text: 'App Store'
        },
        {
            id: 2,
            logo: <FontAwesomeIcon icon={faAndroid} />,
            text: 'Android'
        },
        {
            id: 3,
            logo: <FontAwesomeIcon icon={faGooglePlay} />,
            text: 'Google Play'
        },
        {
            id: 4,
            logo: <FontAwesomeIcon icon={faCircleXmark} />,
            text: 'Mac OS'
        },
        {
            id: 5,
            logo: <FontAwesomeIcon icon={faWindows} />,
            text: 'Windows'
        },
        {
            id: 6,
            logo: <FontAwesomeIcon icon={faPlug} />,
            text: 'API'
        },
    ]
    return (
        <div className={style.kriptoAlımSatım}>
            <div className={style.header}>
                <h2>Her Zaman Her Yerde Kripto Alım Satımı Yapın</h2>
                <div className={style.header_button}>
                    <Button>Şimdi İndir</Button>
                </div>
            </div>
            <div className={style.body}>
                <div className={style.body_image}>
                    <Image src={'/images/alım.png'} alt='alım' width={650} height={487} />
                </div>
                <div className={style.body_right}>
                    <div className={style.qr}>
                        <Image src={'/images/qr.png'} alt='alım' width={126} height={126} />
                        <div className={style.qr_text}>
                            <div className={style.text1}>QR Kodunu Taratın</div>
                            <div className={style.text2}>Android/IOS için Gate.io Uygulamasını İndirin</div>
                        </div>
                    </div>
                    <div className={style.tech}>
                        {
                            techs.map(item => (
                                <Link className={style.tech_link} href={'/'}>
                                    {item.logo}
                                    <span> {item.text} </span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KriptoAlımSatım