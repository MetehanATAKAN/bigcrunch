'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { Carousel } from 'antd';
import { Button } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import style from './styles.module.scss';

const CarouselSection = () => {

    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselDatas = [
        {
            id: 1,
            src: '/images/section1_3.png'
        },
        {
            id: 2,
            src: '/images/section1_2.png'
        },
        {
            id: 3,
            src: '/images/section1_1.png'
        },
        {
            id: 4,
            src: '/images/section1_4.png'
        },
        {
            id: 5,
            src: '/images/section1_5.png'
        },
        {
            id: 6,
            src: '/images/section1_6.png'
        },
        {
            id: 7,
            src: '/images/section1_7.png'
        },
        {
            id: 8,
            src: '/images/section1_8.png'
        },
        {
            id: 9,
            src: '/images/section1_9.png'
        },
        {
            id: 10,
            src: '/images/section1_10.png'
        }
    ]

    const handleSlide = (type) => {
        console.log(currentSlide);
        if(type === 'up') {
            setCurrentSlide(prev => prev -1);
            carouselRef.current.goTo(currentSlide-1);
        }
        else {
            setCurrentSlide(prev => prev +1);
            carouselRef.current.goTo(currentSlide+1);
        }
    }

    return (
        <>
            <div className={style.carousel}>
                <Carousel
                    dotPosition={'right'}
                    dots={false}
                    autoplay afterChange={(current) => setCurrentSlide(current)}
                    ref={carouselRef}
                >
                    {
                        carouselDatas.map(item => (
                            <div key={item.id}>
                                <Image src={item.src} width={510} height={616} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div>
                <div className={style.slide_count}>
                    <Button onClick={()=>handleSlide('up')}><UpOutlined /></Button>
                    <div className={style.currentSlide_count}> <span> {currentSlide + 1} </span> </div>
                    <div className={style.const_count}>10</div>
                    <Button onClick={()=>handleSlide('down')}><DownOutlined /></Button>
                </div>
            </div>

        </>
    )
}

export default CarouselSection