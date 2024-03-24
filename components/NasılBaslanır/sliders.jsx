import React from 'react'
import Image from 'next/image';
import style from './styles.module.scss';
import { Button, Segmented, Table, Space, Progress } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Sliders = () => {

    const twoColors = {
        '0%': '#266fff',
        '100%': '#17e5a1',
      };
      
    return (
        <div className={style.sliders}>
            <div className={style.segmented}>
                <Segmented
                    options={['Startup', 'Spot','Türev Ürün','Finans','Anlar','Copy-trading','NFT','Web3','Gate Card','Gate Pay']}
                    defaultValue='Startup'
                    color='red'
                    style={{backgroundColor:'#3c4150',color:'white'}}
                   
                />
            </div>

            <div className={style.body}>
                <div className={style.left}>
                    <h2>Startup</h2>
                    <div className={style.left1}>
                            <div className={style.left1_text}>
                            <p>
                            Yeni kripto projeleri için launchpad.Gate Startup aracılığıyla kripto airdrop'larını en erken alan siz olun
                            </p>
                            </div>
                    </div>
                    <div className={style.left2}>
                        <div className={style.left2_header}>
                        ATH YATIRIM GETİRİSİ
                        </div>
                        <div className={style.left2_info}>
                            <div className={style.infos}>
                                <div className={style.text1}>8833.8%</div>
                                <div className={style.text2}>PixeVerse(PIXEL)</div>
                            </div>
                            <div className={style.infos}>
                                <div className={style.text1}>8600.0%</div>
                                <div className={style.text2}>Defi Land(DEFILAND)</div>
                            </div>
                            <div className={style.infos}>
                                <div className={style.text1}>8250.0%</div>
                                <div className={style.text2}>ArtWallet(1ART)</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.left3}>
                        <Button>Ücretsiz Airdrop Alın</Button>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.card}>
                        <div className={style.card_header}>
                            <Image src={'/images/brett.png'} alt='brett' width={460} height={258}/>
                            <div className={style.time}>
                                <span><FontAwesomeIcon icon={faClock} /></span>
                                <span>Bitiş için kalan zaman</span>
                                <span>0 Day 10:43:43</span>
                            </div>
                        </div>
                        <div className={style.card_body}>
                            <div className={style.buttons}>
                                <div className={style.button}>Airdrop</div>
                                <div className={style.button}>İLK OLMAYAN</div>
                            </div>
                            <div className={style.cardName}>Brett</div>
                            <div className={style.card_info}>
                                <div className={style.info1}>
                                    <span className={style.number}>114,913</span>
                                    <span className={style.text}> Destekleyenler</span>
                                </div>
                                <div className={style.moneyInfo}>
                                    <div className={style.money1}>
                                        <span className={style.m1}>228,965,163</span>
                                        <span className={style.m2}>/7000 USDT</span>
                                    </div>
                                    <div className={style.money2}>
                                        <span>327093.09%  arttı</span>
                                    </div>
                                </div>
                                <div className={style.progress}>
                                <Progress percent={100} showInfo={false} strokeColor={twoColors} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sliders