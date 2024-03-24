'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import style from './styles.module.scss';
import { CaretDownOutlined, MenuOutlined, MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, ImportOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Drawer, Radio, Menu, ConfigProvider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBatteryThreeQuarters, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [activeSwitchId, setActiveSwitchId] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);

  const navbarMenuItems = [
    {
      id: 1,
      name: 'Kripto Al',
      isDropdown: true,
      items: [
        {
          key: '0',
          label: 'Ana Ağ',
          isIcon: false
        },
        {
          key: '0',
          label: 'Test Ağı',
          isIcon: false
        }
      ]
    },
    {
      id: 2,
      name: 'Piyasa',
      isDropdown: false
    },
    {
      id: 3,
      name: 'Al-Sat',
      isDropdown: true,
      items: [
        {
          key: '0',
          label: 'Ana Ağ',
          isIcon: false
        },
        {
          key: '0',
          label: 'Test Ağı',
          isIcon: false
        }
      ]
    },
    {
      id: 4,
      name: 'Türev Ürün',
      isDropdown: true,
      items: [
        {
          key: '0',
          label: 'Ana Ağ',
          isIcon: false
        },
        {
          key: '0',
          label: 'Test Ağı',
          isIcon: false
        }
      ]
    },
    {
      id: 5,
      name: 'Finance',
      isDropdown: true,
      items: [
        {
          key: '0',
          label: 'Ana Ağ',
          isIcon: false
        },
        {
          key: '0',
          label: 'Test Ağı',
          isIcon: false
        }
      ]
    },
    // {
    //   id: 6,
    //   name: 'Botlar',
    //   isDropdown: true,
    //   items: [
    //     {
    //       key: '0',
    //       label: 'Yazıt Marketi',
    //       isIcon: true,
    //     },
    //     {
    //       key: '0',
    //       label: 'Batch inscribing',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Yazıt Gezintisi',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Yazıt Launchpad',
    //       isIcon: true
    //     }
    //   ]
    // },
    // {
    //   id: 7,
    //   name: 'Kopyala',
    //   isDropdown: true,
    //   items: [
    //     {
    //       key: '0',
    //       label: 'Yazıt Marketi',
    //       isIcon: true,
    //     },
    //     {
    //       key: '0',
    //       label: 'Batch inscribing',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Yazıt Gezintisi',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Yazıt Launchpad',
    //       isIcon: true
    //     }
    //   ]
    // },
    // {
    //   id: 8,
    //   name: 'Kurumsal',
    //   isDropdown: true,
    //   items: [
    //     {
    //       key: '0',
    //       label: 'Startup Airdrop',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Web3 Görevleri',
    //       isIcon: true
    //     }
    //   ]
    // },
    // {
    //   id: 9,
    //   name: 'Anlar',
    //   isDropdown: true,
    //   items: [
    //     {
    //       key: '0',
    //       label: 'NFT',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Davet Ettiklerim',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Akıllı Sözleşme Güvenliği',
    //       isIcon: true
    //     }
    //   ]
    // },
    // {
    //   id: 10,
    //   name: 'Yazıt',
    //   isDropdown: true,
    //   items: [
    //     {
    //       key: '0',
    //       label: 'NFT',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Davet Ettiklerim',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Akıllı Sözleşme Güvenliği',
    //       isIcon: true
    //     }
    //   ]
    // },
    // {
    //   id: 11,
    //   name: 'Ödül Merkezi',
    //   isDropdown: true,
    //   items: [
    //     {
    //       key: '0',
    //       label: 'NFT',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Davet Ettiklerim',
    //       isIcon: true
    //     },
    //     {
    //       key: '0',
    //       label: 'Akıllı Sözleşme Güvenliği',
    //       isIcon: true
    //     }
    //   ]
    // }
  ]

  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Dil', 'sub1', <FontAwesomeIcon icon={faGlobe} className={style.menu_item_icon} />, [
      getItem('Türkçe', '1'),
      getItem('İngilizce', '2')
    ]),
    getItem('Başlangıç-bitiş zamanı değişim yüzdesi', 'sub2', <FontAwesomeIcon icon={faMoon} className={style.menu_item_icon} />, [
      getItem('24s', '5'),
      getItem('UTC 00:00', '6')
    ]),
    getItem('Yükselen/düşen rengi', 'sub4', <FontAwesomeIcon icon={faBatteryThreeQuarters} className={style.menu_item_icon} />, [
      getItem('Yükselen kırmızı ve düşen yeşil', '9'),
      getItem('Yükseliş yeşil, düşüş kırmızı', '10')
    ]),
    getItem('Kripto Al', 'sub5', <FontAwesomeIcon icon={faBatteryThreeQuarters} className={style.menu_item_icon} />, [
      getItem('Yükselen kırmızı ve düşen yeşil', '9'),
      getItem('Yükseliş yeşil, düşüş kırmızı', '10')
    ]),
  ];

  const items2 = [
    getItem('Kripto Al', 'sub11', <FontAwesomeIcon icon={faBatteryThreeQuarters} className={style.menu_item_icon} />, [
      getItem('Ana Ağ', '9'),
      getItem('Test Ağı', '10')
    ]),
    getItem('Piyasa', 'sub6', <FontAwesomeIcon icon={faBatteryThreeQuarters} className={style.menu_item_icon} />),
    getItem('Al-Sat', 'sub1', <FontAwesomeIcon icon={faGlobe} className={style.menu_item_icon} />, [
      getItem('Ana Ağ', '9'),
      getItem('Test Ağı', '10')
    ]),
    getItem('Türev Ürün', 'sub7', <FontAwesomeIcon icon={faGlobe} className={style.menu_item_icon} />, [
      getItem('Ana Ağ', '9'),
      getItem('Test Ağı', '10')
    ]),
    getItem('Finance', 'sub8', <FontAwesomeIcon icon={faGlobe} className={style.menu_item_icon} />, [
      getItem('Ana Ağ', '9'),
      getItem('Test Ağı', '10')
    ]),
    getItem('Başlangıç-bitiş zamanı değişim yüzdesi', 'sub9', <FontAwesomeIcon icon={faMoon} className={style.menu_item_icon} />, [
      getItem('24s', '5'),
      getItem('UTC 00:00', '6')
    ]),
    getItem('Yükselen/düşen rengi', 'sub10', <FontAwesomeIcon icon={faBatteryThreeQuarters} className={style.menu_item_icon} />, [
      getItem('Yükselen kırmızı ve düşen yeşil', '9'),
      getItem('Yükseliş yeşil, düşüş kırmızı', '10')
    ]),
  ];

  const [openKeys, setOpenKeys] = useState([]);
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4','sub5','sub6','sub7','sub8','sub9','sub10','sub11'];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // İlk render'da window genişliğini al
    handleResize();

    // Tarayıcı boyutu değiştiğinde güncelle
    window.addEventListener('resize', handleResize);

    // Temizlik işlemi
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // useEffect sadece bir kere çalışsın

  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <div>
          <Link href={'/'}>
            <Image src='/images/logo.png' alt='logo' width={120} height={24} />
          </Link>
        </div>

        <div className={style.header_menu_items}>
          <div className={style.header_swtich}>
            <div className={style.header_swtich_link}>
              <Link className={activeSwitchId === 1 ? `${style.active_link} ${style.activeAlım}` : style.passive_link} onClick={() => setActiveSwitchId(1)} href={'/'}>Alım-Satım</Link>
              <Link className={activeSwitchId === 2 ? `${style.active_link} ${style.activeWeb3}` : style.passive_link} onClick={() => setActiveSwitchId(2)} href={'/'}>Web3</Link>
            </div>
          </div>

          <div className={style.header_menu_items_links}>
            {
              navbarMenuItems.map((item, index) => (


                item.isDropdown === false
                  ? <Link href={'/'}> {item.name} </Link>
                  : <Dropdown menu={{ items: item.items }} >
                    <Space>
                      <Link href={'/'} onClick={(e) => e.preventDefault()}>
                        {item.name}
                        <CaretDownOutlined height={'3em'} />
                      </Link>
                    </Space>
                  </Dropdown>
              ))
            }
          </div>
        </div>

      </div>
      <section className={style.heder_right}>
        <div className={style.auth}>
          <div className={style.giriş}>
            <Link href={'/'}>Giriş Yap</Link>
          </div>
          <div className={style.header_cüzdan_button}>
            <Button>
              Hesap Oluştur
            </Button>
          </div>
        </div>


        <div>
          <ImportOutlined />
        </div>
        <div>
          <SearchOutlined />
        </div>
        <div className={style.header_dropdown_icon} onClick={() => setOpenMenu(true)} >
          <MenuOutlined />
        </div>

        <Drawer
          title={
            <>
              <Image src='/images/logo_menu.png' alt='logo' width={105} height={24} />
            </>
          }
          placement={'right'}
          width={375}
          onClose={() => setOpenMenu(false)}
          open={openMenu}
          className={style.header_dropdown_menu}
        >
          {
            windowWidth < 655 && (
              <div className={style.mobil_button} style={{display:'block'}}>
                <div className={style.button1} style={{display:'flex',padding:'24px 0 12px 0',justifyContent:'center'}}>
                  <Button type='primary' style={{marginRight:'10px'}}>Web3</Button>
                  <Button type='primary' style={{marginRight:'10px'}}>Alım-Satım</Button>
                </div>
                <div className={style.button2} style={{display:'flex',padding:'24px 0 12px 0',justifyContent:'center'}}>
                  <Button type='primary' style={{marginRight:'10px'}}>Giriş Yap</Button>
                  <Button type='primary' style={{marginRight:'10px'}}>Hesap Oluştur</Button>
                </div>
              </div>
            )
          }
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={windowWidth > 1001 ? items : items2}
          />
        </Drawer>

      </section>
    </div>
  )
}

export default Header