import React from 'react'
import { BsWhatsapp, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"

import Logo from '../../image/logoRafaBueno.png'


import '../../style/Footer.css'


function Footer() {
  return (
    <div className='main-footer'>
       <div className='footer-left'>

            <div className='footer-left-1'></div>

            <div className='footer-left-2'>

                <div><img src={Logo} alt="" /></div>

            </div>

        </div>

        <p>2022 © TODOS OS DIREITOS RESERVADOS</p>

        <div className='footer-right'>

            <div className='footer-right-1' >

                <a href="https://twitter.com/rafaelalves_mus"  target='_blank' className='footer-twitter'><BsTwitter/></a>

                <a href="https://www.linkedin.com/in/rafaelalvesmus" target='_blank' className='footer-linkedin'><BsLinkedin/></a>

                <a href="https://api.whatsapp.com/send?phone=5511974545453" target='_blank' className='footer-whatsapp'><BsWhatsapp/></a>

                <a href="https://www.instagram.com/rafaelalvesmus/?hl=en" target='_blank' className='footer-insta'><BsInstagram/></a>

            </div>

            <div className='footer-right-2'></div>

        </div>
    </div>
  )
}

export default Footer