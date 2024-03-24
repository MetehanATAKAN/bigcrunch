import React from 'react'
import Image from 'next/image'
import style from './styles.module.scss';
import { Button } from 'antd';

const NasılBaslanır = () => {
  return (
    <div className={style.nasılBaslanır}>
      <h2>Nasıl Başlanır</h2>
      <div className={style.all_cards}>

        <div className={style.main_card}>
          <div className={style.card}>
            <div className={style.card_info}>
              <div className={style.cardHeader}>
                <Image src={'/images/nasıl1.png'} width={72} height={72} />
              </div>
              <div className={style.cardBody}>
                <h3>01. Hesap Oluştur</h3>
                <p>Kaydolun ve başlangıç görevlerini tamamlayın, $6666 kadar kazanın</p>
              </div>
            </div>
            <div className={style.cardFooter}>
              <Button>Hesap Oluştur</Button>
            </div>
          </div>
        </div>

        <div className={style.main_card}>
          <div className={style.card}>
            <div className={style.card_info}>
              <div className={style.cardHeader}>
                <Image src={'/images/nasıl2.png'} width={72} height={72} />
              </div>
              <div className={style.cardBody}>
                <h3>02. Hesabınıza Para Yatırın</h3>
                <p>Kripto yatırım yolculuğunuza başlamak için hesabınıza para ekleyin.</p>
              </div>
            </div>
            <div className={style.cardFooter}>
              <Button>Kripto Para Yatır</Button>
              <Button>Kripto Al</Button>
            </div>
          </div>
        </div>

        <div className={style.main_card}>
          <div className={style.card}>
            <div className={style.card_info}>
              <div className={style.cardHeader}>
                <Image src={'/images/nasıl3.png'} width={72} height={72} />
              </div>
              <div className={style.cardBody}>
                <h3>03. Alım Satıma Başlayın</h3>
                <p>Kripto para alın, satın, alım satım kopyalayın ve daha fazlasını keşfedin</p>
              </div>
            </div>
            <div className={style.cardFooter}>
              <Button>Al-Sat</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NasılBaslanır