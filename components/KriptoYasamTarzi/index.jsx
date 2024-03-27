'use client'

import React, { useRef, useState } from 'react'
import style from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHeart,faComments,faComment} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

const KriptoYasamTarzi = () => {

    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

   
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = (id) => {
        if (!isPlaying) {
            setIsPlaying(true);
            if(id === 1) videoRef.current.play();
            else if(id === 2) videoRef2.current.play();
            else if(id === 3) videoRef3.current.play();
        }
    };

    const handleMouseLeave = (id) => {
        if (isPlaying) {
            setIsPlaying(false);
            if(id === 1) videoRef.current.pause();
            else if(id === 2) videoRef2.current.pause();
            else if(id === 3) videoRef3.current.pause();
        }
    };

  
    return (
        <div className={style.kriptoYasam}>
            <div>
                <h2>Kripto Yaşam Tarzı</h2>
            </div>

            <div className={style.all_cards}>

                <div className={style.card}>
                    <div
                        onMouseEnter={()=>handleMouseEnter(1)}
                        onMouseLeave={()=>handleMouseLeave(1)}
                        className={style.video}
                    >
                        <video
                            ref={videoRef}
                            src="https://gimg2.gateimg.com/crypto-life/169138779046827155post_light.mp4"
                            muted
                            loop
                            playsInline
                        />
                    </div>
                    <div className={style.info}>
                        <div className={style.info_header}>
                            <div className={style.icon}><FontAwesomeIcon icon={faShieldHeart} width={24} height={24} /></div>
                            <div className={style.head}>Gate Post</div>
                        </div>

                        <div className={style.info_body}>
                            Kripto Hayatınızı Yatırımcılarla Paylaşın.
                        </div>

                        <div className={style.button}>
                            <Button>İlerle</Button>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div
                        onMouseEnter={()=>handleMouseEnter(2)}
                        onMouseLeave={()=>handleMouseLeave(2)}
                        className={style.video}
                    >
                        <video
                            ref={videoRef2}
                            src="https://gimg2.gateimg.com/crypto-life/169138779018467413live_light.mp4"
                            muted
                            loop
                            playsInline
                        />


                    </div>
                    <div className={style.info}>
                        <div className={style.info_header}>
                            <div className={style.icon}><FontAwesomeIcon icon={faComment} width={24} height={24} /></div>
                            <div className={style.head}>Canlı Yayın</div>
                        </div>

                        <div className={style.info_body}>
                        Sıfır Zaman Farkı ile Canlı Etkileşim.
                        </div>

                        <div className={style.button}>
                            <Button>İlerle</Button>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div
                       onMouseEnter={()=>handleMouseEnter(3)}
                       onMouseLeave={()=>handleMouseLeave(3)}
                        className={style.video}
                    >
                        <video
                            ref={videoRef3}
                            src="https://gimg2.gateimg.com/crypto-life/1691387790128970705chat_light.mp4"
                            muted
                            loop
                            playsInline
                        />


                    </div>
                    <div className={style.info}>
                        <div className={style.info_header}>
                            <div className={style.icon}><FontAwesomeIcon icon={faComments} width={24} height={24} /></div>
                            <div className={style.head}>Sohbet Odası</div>
                        </div>

                        <div className={style.info_body}>
                        Kripto traderları ile sohbet edin
                        </div>

                        <div className={style.button}>
                            <Button>İlerle</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default KriptoYasamTarzi