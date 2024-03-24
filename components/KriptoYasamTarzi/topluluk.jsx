import React from 'react'
import Image from 'next/image';
import style from './styles.module.scss';
import { Carousel, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faTelegram, faXTwitter,faFacebook,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Topluluk = () => {

    const slides = [
        {
            id:1,
            src:'/images/user1.png',
            info:'Binner, Google Kullanıcısı',
            comment:'🔥🔥🔥 Gate.io şimdiye kadar kullandığım en iyi borsa uygulaması. Arayüzün kullanımı basit ve müşteri hizmetleri hızlı. Sıklıkla ilginç etkinlikler ve faydalar sunulmaktadır!'
        },
        {
            id:2,
            src:'/images/user2.png',
            info:'Tony, Profesyonel Yatırımcı',
            comment:'👏Gate.io nun kullanımı gerçekten kolaydır ve yeni kişilerin yerinde uygulama rehberliği, arkadaşça etkinlikler ve çok çeşitli para birimleri ile başlaması için çok uygundur.'
        },
        {
            id:3,
            src:'/images/user3.png',
            info:'Morco, Borsa Profesyonel Kullanıcısı',
            comment:'😄 İçerik zengin ve çeşitlidir. Makaleleri okuduktan sonra pek çok faydalı bilgi edinebilirsiniz. Çok profesyonel bir işlem.'
        },
        {
            id:4,
            src:'/images/user4.png',
            info:'Tony, Profesyonel Yatırımcı',
            comment:'😁 Burasının geniş coin havuzuyla kriptoya başlamak için harika bir yer olduğunu düşünüyorum.'
        },
    ]

    const socialIcons = [
        {
            id:1,
            icon:<FontAwesomeIcon icon={faEnvelope} />
        },
        {
            id:2,
            icon:<FontAwesomeIcon icon={faTelegram} />
        },
        {
            id:3,
            icon:<FontAwesomeIcon icon={faXTwitter} />
        },
        {
            id:4,
            icon:<FontAwesomeIcon icon={faFacebook} />
        },
        {
            id:5,
            icon:<FontAwesomeIcon icon={faYoutube} />
        },
        {
            id:6,
            icon:<FontAwesomeIcon icon={faInstagram} />
        },
        {
            id:7,
            icon:<FontAwesomeIcon icon={faGithub} />
        },
    ]
  return (
    <div className={style.topluluk}>
        <div className={style.carousel}>
            <Carousel
            slidesToShow={2}
            dotPosition='bottom'
            draggable
            arrows={true}
            slidesToScroll={2}
            responsive={[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll:1
                    }
                }
            ]}
            >
                {
                    slides.map(item =>(
                        <div key={item.id} className={style.main_card}>
                        <div className={style.card}>
                            <div className={style.user_logo}>
                            <Image src={item.src} alt='user logo' width={80} height={80} />
                            </div>
                            <div className={style.user_info}>{item.info}</div>
                            <div className={style.user_comment}>{item.comment}</div>
                        </div>
                    </div>
                    ))
                }
            </Carousel>
        </div>
        <div className={style.social}>
            <div className={style.social_image}>
                <Image src={'/images/social.png'} alt='social' width={320} height={180} />
            </div>
            <div className={style.social_bot}>
                <div className={style.icons}>
                {
                    socialIcons.map(item =>(
                        <div key={item.id} className={style.icon}>
                            {item.icon}
                        </div>
                    ))
                }
                </div>
                <div>
                <Button>Gate Topluluğuna Şimdi Katılın</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topluluk