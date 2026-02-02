import React from 'react'
import logo from '../../assets/img/logo/logo.png';
import whats from '../../assets/img/social/whatsapp.png';
import linkedin from '../../assets/img/social/linkedin.png';
import instagram from '../../assets/img/social/instagram.png';

import styles from './Footer.module.scss';




export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" />
        <p>Connect</p>
      </div>
      <div className={styles.textContainer}>
        <p>© 2026 Vai na Web & Empower. Todos os direitos reservados.</p>
        <p> Projeto destinado exclusivamente a fins educativos.</p>
      </div>
      <div className={styles.socialContainer}>
        <a href=""><img src={whats} alt="WhatsApp" className={styles.icon}/></a>
        <a href=""><img src={linkedin} alt="linkedin" className={styles.icon} /></a>
        <a href=""><img src={instagram} alt="Instagram" className={styles.icon} /></a>
        
      </div>     


    </footer>
  )
}
