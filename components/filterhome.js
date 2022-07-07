import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import Globaldata from './globaldata.js'

export default function Home1() {
  const [datafilter, setDatafilter] = useState(Globaldata._datafilterhome());
  return (
    <div className='filterhome'>
        <div className='filterhome_container'>
            <div className='filterhome_left'>
                {datafilter && datafilter.length !== 0 && datafilter.map((elefil,indexfil) =>{
                    return(
                        <div className='select_home' key={indexfil}>
                            <div className='select_home_icon'>
                                <img className='icon_header' src={elefil.linkicon} />
                            </div>
                            <div className='select_home_text'>{elefil.name}</div>
                            <div className='select_home_iconafter'>
                                <img className='icon_header' src='./img/chevron-right-regular-24.png' />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='filterhome_center'>
                <div className='slider_container'>
                    <div className='slider_group'>
                        <div className='slider_img'></div>
                    </div>
                </div>
                <div className='slider_desc_group'>
                    <div className='slider_desc_cover'>
                        <div className='slider_desc'>
                            TUẦN LỄ APPLE
                            <br />
                            Deal sốc sập sàn
                        </div>
                        <div className='slider_desc'>
                            MACBOOK PRO M2
                            <br />
                            Ưu đãi đến 5 triệu
                        </div>
                        <div className='slider_desc'>
                            XIAOMI BAND 7
                            <br />
                            Hàng mới cực ngon
                        </div>
                        <div className='slider_desc'>
                            TIVI XIAOMI 4K P1
                            <br />
                            Mở bán quà khủng
                        </div>
                        <div className='slider_desc'>
                            HUAWEI BAND 7
                            <br />
                            Quà xịn mua ngay
                        </div>
                    </div>
                </div>
            </div>
            <div className='filterhome_right'></div>
        </div>
    </div>
  )
}
