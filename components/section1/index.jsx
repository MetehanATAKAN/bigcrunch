import React from 'react'
import style from './styles.module.scss';
import { Button, Input, Select, Space } from 'antd';
import  SpaceCompact from 'antd/lib/space/Compact';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGift } from '@fortawesome/free-solid-svg-icons';
import CarouselSection from './carousel';
import Statistics from './statistics';

const Section1 = () => {
    return (
        <div className={style.section1}>

            <div className={style.section1_left}>
                <h1>Kriptoya Açılan Kapı</h1>
                <h2>
                    <div>
                        Güvenli, hızlı ve kolay bir şekilde 1.700’den fazla kripto paraya yatırım yapın
                    </div>
                </h2>
                <div className={style.gift}>
                    <FontAwesomeIcon icon={faGift} />
                    <span>Kaydolun ve 6666$'a varan hoş geldin ödülleri kazanın</span>
                </div>
                <div className={style.button_group}>
                    <Space>
                        <SpaceCompact>
                        <Input defaultValue="E-posta veya telefon" />
                        <Button className={style.space_button} type="primary">Hesap Oluştur</Button>
                        </SpaceCompact>
                    </Space>
                    <div className={style.buttons}>
                    <div className={style.google_button}>
                            <Image src='/images/apple.png' alt='google' width={24} height={24} />
                        </div>


                        <div className={style.google_button}>
                            <Image src='/images/google2.png' alt='google' width={24} height={24} />
                        </div>

                        <div className={style.google_button}>
                            <Image src='/images/metamask.png' alt='google' width={24} height={24} />
                        </div>
                    </div>
                </div>

                <Statistics/>
            </div>

            <div className={style.section1_right}>
                <CarouselSection />
            </div>
        </div>
    )
}

export default Section1