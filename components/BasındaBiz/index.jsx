import React from 'react'
import Image from 'next/image';
import style from './styles.module.scss';

const BasındaBiz = () => {

    const cards = [
        {
            id: 1,
            src: '/images/basın1.png',
            header: 'Crypto Exchange Gate.io to Help Busan, South Korea, Build Blockchain Infrastructure',
            text: 'The firm joins Binance, Huobi and FTX in inking paperwork with the city as it develops its nascent crypto market. Crypto exchange Gate.io signed a memorandum of understanding (MoU) on Wednesday with the South Korean city of Busan to help develop blockchain infrastructure in the city.',
            icon: '/images/basın1_1.png'
        },
        {
            id: 2,
            src: '/images/basın2.png',
            header: 'Gate.io CEO Dr. Lin Han on The Future of Security',
            text: 'Gate.io aims to have a very strong security system as an ecosystem – not only for CEX, but also for Web3. We want to figure out everything that’s possible to attack you.',
            icon: '/images/basın2_2.png'
        },
        {
            id: 3,
            src: '/images/basın3.png',
            header: 'Gate.io’s Proof of Reserves Report Reveals $4.3B in Assets with 115% Reserve Ratio for 171 Assets',
            text: 'Gate.io, a leading crypto exchange and Web3 innovator, has released its January 2024 Proof of Reserves (PoR), verifiably demonstrating $4.3 billion in total held assets.',
            icon: '/images/basın3_3.png'
        },
    ]
    return (
        <div className={style.basındaBiz}>
            <div className={style.header}>
                <h2>Basında Biz</h2>
                <div className={style.header_icon}>
                    <Image src={'/images/basın_header.png'} alt='head' width={86} height={52} />
                </div>
            </div>

            <div className={style.main_cards}>
                {
                    cards.map(item => (
                        <div key={item.id} className={style.card}>
                            <div className={style.image}>
                                <Image src={item.src} alt='basın' width={382} height={214} />
                            </div>
                            <div className={style.body}>
                                <h3> {item.header} </h3>
                                <div className={style.text}> {item.text} </div>
                                <div className={style.icon}>
                                    <Image src={item.icon} alt='icon' width={170} height={32} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BasındaBiz