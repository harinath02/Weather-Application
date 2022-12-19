import React from 'react'
import { FooterStyle, Link } from '../style';

function Footer() {
  return (
    <FooterStyle>
        <div className="div">
            <Link href='#'>©2022 Developed By:Harinath</Link>
        </div>
        <div className="div">
            <Link href='#'>Privacy & Cookies</Link>
            <Link href='#'>Terms of use</Link>
            <Link href='#'>Advertise</Link>
            <Link href='#'>Data Providers</Link>
            <Link href='#'>feedback</Link>
        </div>
    </FooterStyle>
  )
}

export default Footer;