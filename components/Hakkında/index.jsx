'use client'

import React, { useState } from 'react'
import style from './styles.module.scss';
import { Collapse, Button, Row, Col } from 'antd';
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

const Hakkında = () => {

    const { Panel } = Collapse;

    const [activeKey, setActiveKey] = useState([]);

    const customPanelStyle = {
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
        overflow: 'hidden',
    };

    const handleCollapseChange = (key) => {
        setActiveKey((prevActiveKey) => {
            if (prevActiveKey.includes(key)) {
                return [];
            } else {
                return [key];
            }
        });
    };

    return (
        <div className={style.hakkında}>
            <div className={style.header}>
                <h2>Gate.io hakkında SSS</h2>
                <div className={style.header_button}>
                    <Button>Yardım ve Destek</Button>
                </div>
            </div>
            <div className={style.accordions}>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Collapse
                                    bordered={false}
                                    expandIcon={({ isActive }) => (isActive ? <CloseCircleOutlined /> : <PlusCircleOutlined />)}
                                    expandIconPosition='end'
                                    accordion
                                    onChange={handleCollapseChange}
                                    activeKey={activeKey}
                                >
                                    <Panel header="Gate.io gibi bir kripto borsası nasıl çalışır?" key="1" style={customPanelStyle}>
                                        <p>
                                            Gate.io, 1.700'den fazla kripto para birimi satın alabileceğiniz, satabileceğiniz ve trade edebileceğiniz bir kripto borsasıdır. Kayıt ve KYC sürecini tamamladıktan sonra, sadece para yatırabilir ve kripto para satın almaya başlayabilirsiniz. Gate.io ayrıca kripto yatırımlarınızı yönetmeniz için bir borsa cüzdanının yanı sıra piyasa trendini analiz edebilmeniz için canlı kripto piyasası verileri de sağlar.
                                        </p>
                                    </Panel>
                                    <Panel header="Gate.io hangi ürünleri sağlıyor?" key="2" style={customPanelStyle}>
                                        <p>
                                            Gate.io, kripto alım, satım ve ticaretinin yanı sıra, kullanıcılara dijital varlıkları yönetmek için borsa cüzdanları, Gate Startup aracılığıyla yeni kripto airdrop'larının listelenmesi ve analiziniz için canlı kripto fiyatları da sağlar. Ayrıca Gate.io, hizmetlerini web3 cüzdanları, LSD protokolleri aracılığıyla stake etme, çok zincirli NFT'ler ve DApp'ler gibi merkezi olmayan web3 ürünlerini de içerecek şekilde genişletmektedir. Eğitim açısından, Gate Learn'de kripto ve Web3 dünyası hakkında daha fazla bilgi edinebilir ve zaman zaman bir bütün olarak kripto piyasasının fiyat tahminlerine göz atabilirsiniz.
                                        </p>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Collapse
                                    bordered={false}
                                    expandIcon={({ isActive }) => (isActive ? <CloseCircleOutlined /> : <PlusCircleOutlined />)}
                                    expandIconPosition='end'
                                    accordion
                                    onChange={handleCollapseChange}
                                    activeKey={activeKey}
                                >
                                    <Panel header="Gate.io'da nasıl kripto satın alabilirim?" key="3" style={customPanelStyle}>
                                        <p>
                                            Gate.io'da kripto satın almanın birkaç yolu vardır. Yöntemlerden biri Gate.io'daki spot piyasalar aracılığıyla satın almayı içerir. Ayrıca, kaldıraçlı ürünler ve/veya türev ürünlerle işlem yaparak kısa vadeli piyasa dalgalanmalarından da yararlanabilirsiniz. Bu şekilde, piyasa tahmininize göre aynı yönde hareket ederse kazançlarınızı artırabilirsiniz.Eksiksiz bir kılavuz için Gate.io'da nasıl kripto satın alınacağına göz atın. Daha ileri düzey kullanıcılar, web3 swap özelliğini kullanarak bir kripto para birimini diğeriyle değiştirmek için cüzdanı bağlamayı da seçebilirler.
                                        </p>
                                    </Panel>
                                    <Panel header="Gate.io güvenli bir kripto para borsası mıdır?" key="4" style={customPanelStyle}>
                                        <p>
                                            Önde gelen bir kripto borsası olan Gate.io, 2013 yılından bu yana 1.700'den fazla kripto para birimini destekleyen güçlü bir geçmişe sahiptir. Rezervlerin kanıtlanmasına ilişkin tedbirler de 2015 yılında uygulamaya konmuştur. Sürekli olarak ortalamanın üzerinde likidite ve işlem hacminin yanı sıra birinci sınıf güvenlik önlemleri sayesinde kullanıcılar Gate.io'nun güvenli ve güvenilir bir kripto borsası olduğuna güvenebilir.
                                        </p>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>


        </div>
    )
}

export default Hakkında