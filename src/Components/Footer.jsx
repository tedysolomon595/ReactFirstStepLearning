import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
           <p>You can contact us via come by our office any time,call and email.We would love to communicate with you.</p>
           <ul>
               <li><img src='./icons/icon.jpg' alt=''/><span>Bole around Skylight Hotel</span></li>
               <li><img src='./icons/phone.jpg' alt=''/><span>+(251)-953-381275</span></li>
               <li><img src='./icons/email.jpg' alt=''/><span>tedys2662@gmail.com</span></li>
           </ul>
        </div>
        <div className='footer-right'>
            <p>Our social links are </p>
            <ul>
                <li>
                    <a href='www.facebook.com'>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </li>
                
                <li>
                    <a href='www.Twitter.com'>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </li>
                <li>
                    <a href='www.Instagram.com'>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                
                <li>
                    <a href='www.facebook.com'>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
