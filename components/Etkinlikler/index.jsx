'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image';
import style from './styles.module.scss';
import { Carousel, Button } from 'antd';

const Etkinlikler = () => {

    const carouselRef = useRef(null);
    const [hoveredSlideId, setHoveredSlideId] = useState(null);

    const slides = [
        {
            id: 1,
            src: '/images/etkinlik1.jpg',
            infoText: '/activities/gate-io-p2p-lucky-gashapon'
        },
        {
            id: 2,
            src: '/images/etkinlik2.png',
            infoText: 'MEME Competiton'
        },
        {
            id: 3,
            src: '/images/etkinlik3.jpg',
            infoText: 'KAÇUV Support Children Battling Cancer Program'
        },
        {
            id: 4,
            src: '/images/etkinlik4.png',
            infoText: 'Answer&Earn'
        },
        {
            id: 5,
            src: '/images/etkinlik5.png',
            infoText: 'P2P_一元新用户交易活动'
        },
        {
            id: 6,
            src: '/images/etkinlik6.png',
            infoText: 'Activity Center'
        },
        {
            id: 7,
            src: '/images/etkinlik7.png',
            infoText: 'Paskalya Yumurtası Labirenti：30.000 Dolarlık Ödül Avı'
        },
        {
            id: 8,
            src: '/images/etkinlik8.jpg',
            infoText: 'Your Gateway to Spring!'
        },
        {
            id: 9,
            src: '/images/etkinlik9.jpg',
            infoText: 'Charity NFT'
        },
    ]
    return (
        <div className={style.etkinlikler}>
            <div className={style.header}>
                <h2>Etkinlikler</h2>
                <Button>Daha Fazla Etkinlik</Button>
            </div>
            <div>
                <Carousel
                    slidesToShow={4}
                    dotPosition='top'
                    autoplay
                    ref={carouselRef}
                    arrows={true}
                    responsive={[
                        {
                            breakpoint: 1167,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll:3,
                                
                            },
                        },
                        {
                            breakpoint: 940,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll:2
                            },
                        },
                        {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll:1
                            },
                        },
                    ]}
                >
                    {slides.map(slide => (
                        <div key={slide.id} className={style.slideContainer}>
                            <Image src={slide.src} alt='etkinlik-slide-logo' width={282} height={159} />
                            
                            <div className={style.slideContent}>
                            {hoveredSlideId === slide.id && <p>{slide.infoText}</p>} 
                            </div>
                            <div className={style.overlay} onMouseEnter={() => setHoveredSlideId(slide.id)} onMouseLeave={() => setHoveredSlideId(null)}></div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Etkinlikler