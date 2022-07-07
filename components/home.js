import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import styles from '../styles/home1.module.css'
import Filterhome from './filterhome.js'

import React, { useState } from 'react';

export default function Home1() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='header'>
        <div className='header_container'>
            <div className='header_left'>
                <div className='header_left_logo'>fakephone</div>
                <div className='header_left_btn'>
                    <div className='headleft_icon_btn'>
                        <img className='icon_header' src='./img/iconcategory.png' />
                    </div>
                    <div className='headleft_content'>
                        <div className='headleft_text'>Danh mục</div>
                    </div>
                </div>
                <div className='header_left_btn'>
                    <div className='headleft_icon_btn'>
                        <img className='icon_header' src='./img/iconlocaltion.png' />
                    </div>
                    <div className='headleft_content'>
                        <div className='headleft_text'>
                            <span className='headleft_text_title'>xem giá tại</span>
                            <span className='headleft_text_option'>Miền Nam</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header_center'>
                <div className='iconsearch'><img className='icon_header' src='./img/iconsearch.png' /></div>
                <input className='input_search_header' placeholder='Bạn cần tìm gì ?'/>
            </div>
            <div className='header_right'>
                <div className='header_right_btn'>
                    <div className='icon_righthead'><img className='icon_header' src='./img/iconphone.png' /></div>
                    <div className='righthead_content'>
                        <span className='headright_text_title'>Gọi mua hàng</span>
                        <span className='headright_text_option'>1800.2097</span>
                    </div>
                </div>
                <div className='header_right_btn'>
                    <div className='icon_righthead'><img className='icon_header' src='./img/iconlocaltion.png' /></div>
                    <div className='righthead_content'><p>Cửa hàng gần bạn</p></div>
                </div>
                <div className='header_right_btn'>
                    <div className='icon_righthead'><img className='icon_header' src='./img/icontruck.png' /></div>
                    <div className='righthead_content'><p>Tra cứu đơn hàng</p></div>
                </div>
                <div className='header_right_btn'>
                    <div className='icon_righthead'><img className='icon_header' src='./img/iconbagshopping.png' /></div>
                    <div className='righthead_content'><p>Giỏ hàng</p></div>
                </div>
                <div className='header_right_btn'>
                    <div className='icon_righthead'><img className='icon_header' src='./img/iconcategory.png' /></div>
                    <div className='righthead_content'></div>
                </div>
            </div>
        </div>
      </div>  
      <div className='homepage_body'>
        <Filterhome/>
      </div>
    </>
  )
}
