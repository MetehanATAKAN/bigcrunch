'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faTelegram, faXTwitter,faFacebook,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [ drop, setDrop ]  = useState({
		'about'			: false,
		'products' 		: false,
		'services'		: false,
		'institutional'	: false,
		'moment'		: false,
		'learn'			: false,
		'finance'	     : false
	})

	const [ learnDrop, setLearnDrop ] = useState({
		price	: false,
		buy		: false,
		predict	: false
	})

	const isOpenedLearnDropdown = (node) => {
		const defaultDrop = {
			price	: false,
			buy 	: false,
			predict : false
		}

		setLearnDrop({
			...defaultDrop,
			[node] : !learnDrop[node]
		})
	}

	const isOpenedDropdown = (node) => {
		const defaultDrop = {
			'about'			: false,
			'products' 		: false,
			'services'		: false,
			'institutional'	: false,
			'moment'		: false,
			'learn'			: false,
			'finance'	     : false
		} 

		setDrop({
			...defaultDrop,
			[node] : !drop[node]
		})
	}

  return (
    <>
    <footer className='footer mobile'>
			<div className='footer-container'>
				<div className='content-wrapper'>
					<header className='content-header' id='about-header' onClick={ () => isOpenedDropdown('about')}>
						<p>Hakkında</p>
						<Image 
							src="/images/arrow-down.png" 
                            width={16}
                            height={16}
							alt='footer-menu-icon'
							id="icon"
							style={{ transform: drop.about ? 'rotate(180deg)' : 'rotate(0deg) '}}
						/>
					</header>
					<ul style={{ maxHeight: drop.about ? '500px' : '0' }}>
						<li><a href="/">Hakkımızda</a></li>
						<li><a href="/">Kariyer</a></li>
						<li><a href="/">Kullanıcı Sözleşmesi</a></li>
						<li><a href="/">Gizlilik Politikası</a></li>
						<li><a href="/">Ücretler</a></li>
						<li><a href="/">Medya Kiti</a></li>
						<li><a href="/">%100 Rezerv Kanıtı</a></li>
						<li><a href="/">Gate SAFU</a></li>
						<li><a href="/">Gate Labs</a></li>
						<li><a href="/">Gate Ventures</a></li>
						<li><a href="/">Gate Grants</a></li>
						<li><a href="/">Güvenlilik</a></li>
						<li><a href="/">Duyuru</a></li>
						<li><a href="/">Topluluk</a></li>
						<li><a href="/">GT kullanıcı ayrıcalıkları</a></li>
						<li><a href="/">Gate Chain</a></li>
						<li><a href="/">Takvim</a></li>
						<li><a href="/">Hukuki Yaptırım</a></li>
					</ul>
				</div>
				<div className='content-wrapper'>
					<header className='content-header' id='product-header' onClick={ () => isOpenedDropdown('products')}>
						<p>Ürünler</p>
						<Image 
							src="/images/arrow-down.png" 
                            width={16}
                            height={16}
							alt='footer-menu-icon'
							style={{ transform: drop.products ? 'rotate(180deg)' : 'rotate(0deg) '}}
						/>
					</header>
					<ul style={{ maxHeight: drop.products ? '500px' : '0' }}>
						<li><a href="/">Kripto Al</a></li>
						<li><a href="/">Kripto Sat</a></li>
						<li><a href="/">Kripto Para Fiyatları</a></li>
						<li><a href="/">Alım Satım</a></li>
						<li><a href="/">Perpetual Vadeli İşlemler</a></li>
						<li><a href="/">Kaldıraçlı token'lar</a></li>
						<li><a href="/">Startup</a></li>
						<li><a href="/">NFT</a></li>
						<li><a href="/">Çarpraz Zincir</a></li>
						<li><a href="/">Gate Pay</a></li>
						<li><a href="/">MiniApp</a></li>
						<li><a href="/">Hediye Kartı</a></li>
						<li><a href="/">Gate OTC</a></li>
						<li><a href="/">Gate Charity</a></li>
						<li><a href="/">Gate Kart</a></li>
						<li><a href="/">Büyük Veri</a></li>
						<li><a href="/">Gate Mağazası</a></li>
						<li><a href="/">Hukuki Yaptırım</a></li>
					</ul>
				</div>
				<div className='content-wrapper'>
					<header className='content-header' id='servies-header' onClick={ () => isOpenedDropdown('services')}>
						<p>Hizmetler</p>
						<Image 
							src="/images/arrow-down.png" 
                            width={16}
                            height={16}
							alt='footer-menu-icon'
							style={{ transform: drop.services ? 'rotate(180deg)' : 'rotate(0deg)'}}
						/>
					</header>
					<ul style={{ maxHeight: drop.services ? '500px' : '0' }}>
						<li><a href="/">Kullanıcı Geri Bildirimi</a></li>
						<li><a href="/">Yardımcı Merkezi</a></li>
						<li><a href="/">Bir talep gönder</a></li>
						<li><a href="/">Listeleme</a></li>
						<li><a href="/">Akıllı Sözleşme Güvenliği</a></li>
						<li><a href="/">Geliştiriciler (API)</a></li>
						<li><a href="/">Doğrulama Araması</a></li>
						<li><a href="/">P2P Tüccar Uygulaması</a></li>
						<li><a href="/">P2P Blue V Uygulaması</a></li>
					</ul>

					<header className='content-header' id='institutional-header' onClick={ () => isOpenedDropdown('institutional')}>
						<p>Kurumsal</p>
						<Image 
							src="/images/arrow-down.png" 
                            width={16}
                            height={16}
							alt='footer-menu-icon'
							style={{ transform: drop.institutional ? 'rotate(180deg)' : 'rotate(0deg) '}}
						/>
					</header>
					<ul style={{ maxHeight: drop.institutional ? '500px' : '0' }}>
						<li><a href="/">Kurumsal ve VIP Hizmetler</a></li>
						<li><a href="/">Broker Programı</a></li>
						<li><a href="/">Influencer Programı</a></li>
						<li><a href="/">Yönlendirme Programı</a></li>
						<li><a href="/">Ortaklık Programı</a></li>

					</ul>
				</div>
				<div className='content-wrapper'>
					<header className='content-header' id='moment-header' onClick={ () => isOpenedDropdown('moment')}>
						<p>Anlar</p>
						<Image 
							src="/images/arrow-down.png" 
                            width={16}
                            height={16}
							alt='footer-menu-icon'
							style={{ transform: drop.moment ? 'rotate(180deg)' : 'rotate(0deg) '}}
						/>
					</header>
					<ul style={{ maxHeight: drop.moment ? '500px' : '0' }}>
						<li><a href="/">Anlar</a></li>
						<li><a href="/">Gate Post</a></li>
						<li><a href="/">Canlı Yayın</a></li>
						<li><a href="/">Sohbet</a></li>
						<li><a href="/">Haberler</a></li>
						<li><a href="/">Gelecek Etkinlikler</a></li>
						<li><a href="/">Blog</a></li>
					</ul>

					<header className='content-header' id='learn-header' onClick={ () => isOpenedDropdown('learn')}>
						<p>Learn</p>
						<Image 
							src="/images/arrow-down.png" 
                            width={16}
                            height={16}
							alt='footer-menu-icon'
							style={{ transform: drop.learn ? 'rotate(180deg)' : 'rotate(0deg) '}}
						/>
					</header>
					<ul style={{ maxHeight: drop.learn ? '500px' : '0' }}>
						<li><a href="/">Gate Learn</a></li>
						<li><a href="/">Kripto Kursları</a></li>
						<li><a href="/">Kripto Sözlüğü</a></li>
						<li><a href="/">Bitcoin Yarılanması</a></li>
						<li><a href="/">ETH 2.0 Yükselmesi</a></li>
						<li 
							className	= 'learn-section-dropdown'
							onClick		= { () => isOpenedLearnDropdown('price') }
						>
							<span href="/">Kripto Fiyatları</span>
							<Image src='/images/play.png'
                             width={16}
                             height={16}
								style={{ transform: learnDrop.price ? 'rotate(270deg)': 'rotate(90deg)' }}/>
							<ul style={{ maxHeight: learnDrop.price ? '400px': '0'}}>
								<li>GT Fiyatı</li>
								<li>Bitcoin Fiyatı</li>
								<li>Ethereum Fiyatı</li>
								<li>Dogecoin Fiyatı</li>
								<li>XRP Fiyatı</li>
								<li>Solana Fiyatı</li>
								<li>Cardano Fiyatı</li>
								<li>Diğer Kripto Fiyatı</li>
							</ul>
						</li>
						<li 
							className	= 'learn-section-dropdown'
							onClick		= { () => isOpenedLearnDropdown('buy') }
						>
							<span>Kripto Nasıl Satın Alınır?</span>
							<Image 
								src		= '/images/play.png'
                                width   = {16}
                                height  = {16}
								style	= {{ transform: learnDrop.buy ? 'rotate(270deg)': 'rotate(90deg)' }}
							/>
							<ul style={{ maxHeight: learnDrop.buy ? '400px': '0'}}>
								<li>GT Al</li>
								<li>Bitcoin Al</li>
								<li>Ethereum Al</li>
								<li>USDT Al</li>
								<li>Dogecoin Fiyatı</li>
								<li>XRP Fiyatı</li>
								<li>Solana Fiyatı</li>
								<li>Cardano Fiyatı</li>
								<li>Diğer Kripto Paraları Satın Alın</li>
							</ul>
						</li>
						<li 
							className	= 'learn-section-dropdown'
							onClick		= { () => isOpenedLearnDropdown('predict') }
						>
							<span>Kripto Fiyat Tahmini</span>
							<Image 
								src		= '/images/play.png'
                                width   = {16}
                                height  = {16}
								style	= {{ transform: learnDrop.predict ? 'rotate(270deg)': 'rotate(90deg)' }}
							/>
							<ul style={{ maxHeight: learnDrop.predict ? '400px': '0'}}>
								<li>GT Fiyat Tahmini</li>
								<li>Bitcoin Fiyat Tahmini</li>
								<li>Ethereum Fiyat Tahmini</li>
								<li>Dogecoin Fiyat Tahmini</li>
								<li>XRP Fiyat Tahmini</li>
								<li>Solana Fiyat Tahmini</li>
								<li>Cardano Fiyat Tahmini</li>
								<li>Daha Fazla Kripto Para Tahmini</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className='content-wrapper'>
					<header className='content-header' id='finance-header' onClick={ () => isOpenedDropdown('finance')}>
						<p>Finans</p>
						<Image 
							src="/images/arrow-down.png" 
                            width={16}
                            height={16}
							alt='footer-menu-icon'
							style={{ transform: drop.finance ? 'rotate(180deg)' : 'rotate(0deg) '}}
						/>
					</header>
					<ul style={{ maxHeight: drop.finance ? '500px' : '0' }}>
						<li><a href="/">Simple Earn</a></li>
						<li><a href="/">Varlık Kapınız</a></li>
						<li><a href="/">Otomatik Yatırım</a></li>
						<li><a href="/">ETH2.0 Staking</a></li>
						<li><a href="/">HODL & Kazan</a></li>
						<li><a href="/">Yapılandırılmış Ürünler</a></li>
						<li><a href="/">İkili Ürünler</a></li>
						<li><a href="/">Kripto Kredisi</a></li>
						<li><a href="/">Likidite Madenciliği</a></li>
						<li><a href="/">Bulut Madenciliği</a></li>
						<li><a href="/">Slot Artırmaları</a></li>
					</ul>
				</div>
			</div>

			<div className='options-logos-mobile'>
				<div className='social-media-icons'>
                    <FontAwesomeIcon width={24} height={24} icon={faEnvelope} />
                    <FontAwesomeIcon width={24} height={24} icon={faFacebook} />
                    <FontAwesomeIcon width={24} height={24} icon={faYoutube} />
                    <FontAwesomeIcon width={24} height={24} icon={faInstagram} />
                    <FontAwesomeIcon width={24} height={24} icon={faXTwitter} />
                    <FontAwesomeIcon width={24} height={24} icon={faTelegram} />
                    <FontAwesomeIcon width={24} height={24} icon={faGithub} />
				</div>
				<div className='options-class-mobile'>
					<div className='options-wrapper'>
						{/* <select id="cars">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select> */}
					</div>
					<div className='options-wrapper'>
						{/* <select id="cars">
							<option value="volvo">Volvo</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select> */}
					</div>
				</div>
				</div>
				<p id='copyright-mobile'>Copyright © 2013-2024. All Right Reserved.</p>
		</footer>
		<footer className='footer desktop'>
			<div className='footer-container'>
				<div className='content-wrapper'>
					<header className='content-header'>
						<p>Hakkında</p>
					</header>
					<ul>
						<li><a href="/">Hakkımızda</a></li>
						<li><a href="/">Kariyer</a></li>
						<li><a href="/">Kullanıcı Sözleşmesi</a></li>
						<li><a href="/">Gizlilik Politikası</a></li>
						<li><a href="/">Ücretler</a></li>
						<li><a href="/">Medya Kiti</a></li>
						<li><a href="/">%100 Rezerv Kanıtı</a></li>
						<li><a href="/">Gate SAFU</a></li>
						<li><a href="/">Gate Labs</a></li>
						<li><a href="/">Gate Ventures</a></li>
						<li><a href="/">Gate Grants</a></li>
						<li><a href="/">Güvenlilik</a></li>
						<li><a href="/">Duyuru</a></li>
						<li><a href="/">Topluluk</a></li>
						<li><a href="/">GT kullanıcı ayrıcalıkları</a></li>
						<li><a href="/">Gate Chain</a></li>
						<li><a href="/">Takvim</a></li>
						<li><a href="/">Hukuki Yaptırım</a></li>
					</ul>
				</div>
				<div className='content-wrapper'>
					<header className='content-header'>
						<p>Ürünler</p>
					</header>
					<ul>
						<li><a href="/">Kripto Al</a></li>
						<li><a href="/">Kripto Sat</a></li>
						<li><a href="/">Kripto Para Fiyatları</a></li>
						<li><a href="/">Alım Satım</a></li>
						<li><a href="/">Perpetual Vadeli İşlemler</a></li>
						<li><a href="/">Kaldıraçlı token'lar</a></li>
						<li><a href="/">Startup</a></li>
						<li><a href="/">NFT</a></li>
						<li><a href="/">Çarpraz Zincir</a></li>
						<li><a href="/">Gate Pay</a></li>
						<li><a href="/">MiniApp</a></li>
						<li><a href="/">Hediye Kartı</a></li>
						<li><a href="/">Gate OTC</a></li>
						<li><a href="/">Gate Charity</a></li>
						<li><a href="/">Gate Kart</a></li>
						<li><a href="/">Büyük Veri</a></li>
						<li><a href="/">Gate Mağazası</a></li>
						<li><a href="/">Hukuki Yaptırım</a></li>
					</ul>
				</div>
				<div className='content-wrapper' >
					<header className='content-header'>
						<p>Hizmetler</p>
					</header>
					<ul>
						<li><a href="/">Kullanıcı Geri Bildirimi</a></li>
						<li><a href="/">Yardımcı Merkezi</a></li>
						<li><a href="/">Bir talep gönder</a></li>
						<li><a href="/">Listeleme</a></li>
						<li><a href="/">Akıllı Sözleşme Güvenliği</a></li>
						<li><a href="/">Geliştiriciler (API)</a></li>
						<li><a href="/">Doğrulama Araması</a></li>
						<li><a href="/">P2P Tüccar Uygulaması</a></li>
						<li><a href="/">P2P Blue V Uygulaması</a></li>
					</ul>

					<header>
						<p>Kurumsal</p>
					</header>
					<ul>
						<li><a href="/">Kurumsal ve VIP Hizmetler</a></li>
						<li><a href="/">Broker Programı</a></li>
						<li><a href="/">Influencer Programı</a></li>
						<li><a href="/">Yönlendirme Programı</a></li>
						<li><a href="/">Ortaklık Programı</a></li>

					</ul>
				</div>
				<div className='content-wrapper'>
					<header className='content-header'>
						<p>Anlar</p>
					</header>
					<ul>
						<li><a href="/">Anlar</a></li>
						<li><a href="/">Gate Post</a></li>
						<li><a href="/">Canlı Yayın</a></li>
						<li><a href="/">Sohbet</a></li>
						<li><a href="/">Haberler</a></li>
						<li><a href="/">Gelecek Etkinlikler</a></li>
						<li><a href="/">Blog</a></li>
					</ul>

					<header className='content-header'>
						<p>Learn</p>
					</header>
					<ul>
						<li><a href="/">Gate Learn</a></li>
						<li><a href="/">Kripto Kursları</a></li>
						<li><a href="/">Kripto Sözlüğü</a></li>
						<li><a href="/">Bitcoin Yarılanması</a></li>
						<li><a href="/">ETH 2.0 Yükselmesi</a></li>
						<li 
							className	= 'learn-section-dropdown'
							onClick		= { () => isOpenedLearnDropdown('price') }
						>
							<span href="/">Kripto Fiyatları</span>
							<Image src='/images/play.png'
                             width={16}
                             height={16}
								style={{ transform: learnDrop.price ? 'rotate(270deg)': 'rotate(90deg)' }}/>
							<ul style={{ maxHeight: learnDrop.price ? '400px': '0'}}>
								<li>GT Fiyatı</li>
								<li>Bitcoin Fiyatı</li>
								<li>Ethereum Fiyatı</li>
								<li>Dogecoin Fiyatı</li>
								<li>XRP Fiyatı</li>
								<li>Solana Fiyatı</li>
								<li>Cardano Fiyatı</li>
								<li>Diğer Kripto Fiyatı</li>
							</ul>
						</li>
						<li 
							className	= 'learn-section-dropdown'
							onClick		= { () => isOpenedLearnDropdown('buy') }
						>
							<span>Kripto Nasıl Satın Alınır?</span>
							<Image 
								src		= '/images/play.png'
                                width={16}
                                height={16}
								style	= {{ transform: learnDrop.buy ? 'rotate(270deg)': 'rotate(90deg)' }}
							/>
							<ul style={{ maxHeight: learnDrop.buy ? '400px': '0'}}>
								<li>GT Al</li>
								<li>Bitcoin Al</li>
								<li>Ethereum Al</li>
								<li>USDT Al</li>
								<li>Dogecoin Fiyatı</li>
								<li>XRP Fiyatı</li>
								<li>Solana Fiyatı</li>
								<li>Cardano Fiyatı</li>
								<li>Diğer Kripto Paraları Satın Alın</li>
							</ul>
						</li>
						<li 
							className	= 'learn-section-dropdown'
							onClick		= { () => isOpenedLearnDropdown('predict') }
						>
							<span>Kripto Fiyat Tahmini</span>
							<Image 
								src		= '/images/play.png'
                                width={16}
                                height={16}
								style	= {{ transform: learnDrop.predict ? 'rotate(270deg)': 'rotate(90deg)' }}
							/>
							<ul style={{ maxHeight: learnDrop.predict ? '400px': '0'}}>
								<li>GT Fiyat Tahmini</li>
								<li>Bitcoin Fiyat Tahmini</li>
								<li>Ethereum Fiyat Tahmini</li>
								<li>Dogecoin Fiyat Tahmini</li>
								<li>XRP Fiyat Tahmini</li>
								<li>Solana Fiyat Tahmini</li>
								<li>Cardano Fiyat Tahmini</li>
								<li>Daha Fazla Kripto Para Tahmini</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className='content-wrapper'>
					<header className='content-header'>
						<p>Finans</p>
					</header>
					<ul>
						<li><a href="/">Simple Earn</a></li>
						<li><a href="/">Varlık Kapınız</a></li>
						<li><a href="/">Otomatik Yatırım</a></li>
						<li><a href="/">ETH2.0 Staking</a></li>
						<li><a href="/">HODL & Kazan</a></li>
						<li><a href="/">Yapılandırılmış Ürünler</a></li>
						<li><a href="/">İkili Ürünler</a></li>
						<li><a href="/">Kripto Kredisi</a></li>
						<li><a href="/">Likidite Madenciliği</a></li>
						<li><a href="/">Bulut Madenciliği</a></li>
						<li><a href="/">Slot Artırmaları</a></li>
					</ul>
				</div>
			</div>
			<div className='options-logos-desktop'>
				<div className='options-class-desktop'>
					<div className='option-wrapper'>
						
					</div>
					<div className='social-media-icons'>
                    <FontAwesomeIcon width={24} height={24} icon={faEnvelope} />
                    <FontAwesomeIcon width={24} height={24} icon={faFacebook} />
                    <FontAwesomeIcon width={24} height={24} icon={faYoutube} />
                    <FontAwesomeIcon width={24} height={24} icon={faInstagram} />
                    <FontAwesomeIcon width={24} height={24} icon={faXTwitter} />
                    <FontAwesomeIcon width={24} height={24} icon={faTelegram} />
                    <FontAwesomeIcon width={24} height={24} icon={faGithub} />
					</div>
				</div>
				<p id='copyright-desktop'>Copyright © 2013-2024.</p>
			</div>
		</footer>
    </>
  )
}

export default Footer