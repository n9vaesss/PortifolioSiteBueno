import React, {useState} from 'react'
import {Link} from 'react-scroll'
import { BsWhatsapp, BsInstagram } from "react-icons/bs"
import { FiAlignJustify } from "react-icons/fi";

import '../../style/Nav.css'

import Logo from '../../image/logoRafaBueno.png'

function Nav() {

    const [showLinks, setshowLinks] = useState(false);

  return (
    <div className='main-nav'>

        <div className='nav-left'>

            <div className='nav-left-1'></div>

            <div className='nav-left-2'>

                <div><img src={Logo} alt="" /></div>

            </div>

        </div>

        <div className='nav-right'>

            <div className='nav-right-1' id={showLinks ? "hidden" : ""}>

                <Link to = "" spy = {true} smooth ={true} offset={-300} duration={500} className = "nav-inicio"> INÍCIO </Link>
                <Link to = "1" spy = {true} smooth ={true} offset={-100} duration={500} className = "nav-bio"> BIO </Link>
                <Link to = "2" spy = {true} smooth ={true} offset={-100} duration={500} className = "nav-contato"> CONTATO </Link>

                <a href="https://api.whatsapp.com/send?phone=5511974545453" target='_blank' className='nav-whatsapp'><BsWhatsapp/></a>

                <a href="https://www.instagram.com/rafaelalvesmus/?hl=en" className='nav-insta' target='_blank'><BsInstagram/></a>

            </div>

            <FiAlignJustify className="nav-button" onClick={()=> setshowLinks(!showLinks)}/>

            <div className='nav-right-2'></div>

        </div>

    </div>
  )
}

export default Nav