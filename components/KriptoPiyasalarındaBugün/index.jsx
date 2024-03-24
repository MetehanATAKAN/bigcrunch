'use client'

import React from 'react'
import Image from 'next/image';
import style from './styles.module.scss';
import { Button, Segmented, Table, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const KriptoPiyasalarındaBugün = () => {

    const changex = (value) => {
        console.log(value);
    }
    const columns = [
        {
            title: 'Coin',
            dataIndex: 'coin',
            key: 'coin',
        },
        {
            title: 'Fiyatı',
            dataIndex: 'fiyatı',
            key: 'fiyatı',
        },
        {
            title: '24S İşlem Hacmi',
            dataIndex: 'işlemhacmi',
            key: 'işlemhacmi',
        },
        {
            title: '24S Değişim',
            dataIndex: 'değişim',
            key: 'değişim',
        },
        {
            title: ' ',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary'>Al-Sat</Button>
                </Space>
            ),
        },
    ]

    const data = [
        {
            coin: (
                <div className={style.coin}>
                    <div className={style.coin_image}>
                        <Image src={'/images/table1.png'} alt='token-logo' width={28} height={28} />
                    </div>
                    <div className={style.coin_info}>
                        <div className={style.coin_name}>GT</div>
                        <div className={style.coin_name2}>GateToken</div>
                    </div>
                </div>
            ),
            fiyatı: '$8.28',
            işlemhacmi: '11.57M',
            değişim: '+13.06%'
        },
        {
            coin: (
                <div className={style.coin}>
                    <div className={style.coin_image}>
                        <Image src={'/images/table2.png'} alt='token-logo' width={28} height={28} />
                    </div>
                    <div className={style.coin_info}>
                        <div className={style.coin_name}>NADA</div>
                        <div className={style.coin_name2}>NADA Protocol Token</div>
                    </div>
                </div>
            ),
            fiyatı: '$12.32',
            işlemhacmi: '113.57M',
            değişim: '+19.06%'
        },
        {
            coin: (
                <div className={style.coin}>
                    <div className={style.coin_image}>
                        <Image src={'/images/table3.png'} alt='token-logo' width={28} height={28} />
                    </div>
                    <div className={style.coin_info}>
                        <div className={style.coin_name}>BTC</div>
                        <div className={style.coin_name2}>Bitcoin</div>
                    </div>
                </div>
            ),
            fiyatı: '$64963.90',
            işlemhacmi: '88.47M',
            değişim: '+0.64%'
        },
        {
            coin: (
                <div className={style.coin}>
                    <div className={style.coin_image}>
                        <Image src={'/images/table4.png'} alt='token-logo' width={28} height={28} />
                    </div>
                    <div className={style.coin_info}>
                        <div className={style.coin_name}>BOME</div>
                        <div className={style.coin_name2}>BOOK OF MEME</div>
                    </div>
                </div>
            ),
            fiyatı: '$8.28',
            işlemhacmi: '11.57M',
            değişim: '+13.06%'
        },
        {
            coin: (
                <div className={style.coin}>
                    <div className={style.coin_image}>
                        <Image src={'/images/table5.png'} alt='token-logo' width={28} height={28} />
                    </div>
                    <div className={style.coin_info}>
                        <div className={style.coin_name}>ETH</div>
                        <div className={style.coin_name2}>Ethereum</div>
                    </div>
                </div>
            ),
            fiyatı: '$8.28',
            işlemhacmi: '11.57M',
            değişim: '+13.06%'
        },
        {
            coin: (
                <div className={style.coin}>
                    <div className={style.coin_image}>
                        <Image src={'/images/table6.png'} alt='token-logo' width={28} height={28} />
                    </div>
                    <div className={style.coin_info}>
                        <div className={style.coin_name}>DOGE</div>
                        <div className={style.coin_name2}>DogeCoin</div>
                    </div>
                </div>
            ),
            fiyatı: '$8.28',
            işlemhacmi: '11.57M',
            değişim: '+13.06%'
        },
    ]
    const data2 = [
        {
            coin: (
                <div className={style.coin}>
                    <div className={style.coin_image}>
                        <Image src={'/images/table1.png'} alt='token-logo' width={28} height={28} />
                    </div>
                    <div className={style.coin_info}>
                        <div className={style.coin_name}>GT</div>
                        <div className={style.coin_name2}>GateToken</div>
                    </div>
                </div>
            ),
            fiyatı: '$8.28',
            işlemhacmi: '11.57M',
            değişim: '+13.06%'
        },
    ]
    return (
        <div className={style.kriptoPiyasa}>
            <div className={style.header}>
                <h2>Kripto Piyasalarında Bugün</h2>
                <div className={style.header_right}>
                    <div className={style.buttons}>
                        <div className={style.header_button}>
                            <Button><SearchOutlined /></Button>
                        </div>
                        <div className={style.header_button}>
                            <Button>Tüm Kripto Fiyatları</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.body}>
                <div className={style.table1}>
                    <div className={style.segmented}>
                        <Segmented
                            options={['Spot', 'Vadeli', 'Kazan', 'Borç', 'Yeni', 'Web3']}
                            onChange={(value) => changex(value)}
                            defaultValue='Spot'
                        />
                    </div>
                    <div className={style.table}>
                        <Table columns={columns} dataSource={data} scroll={{ x: true }} />
                    </div>
                </div>
                <div className={style.table2}>
                    <div className={style.segmented}>
                        <Segmented
                            options={['Öne Çıkanlar','En Fazla Kazananlar']}
                            onChange={(value) => changex(value)}
                            defaultValue='Spot'
                        />
                    </div>
                    <div className={style.table}>
                        <Table columns={columns} dataSource={data} scroll={{ x: true }} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default KriptoPiyasalarındaBugün