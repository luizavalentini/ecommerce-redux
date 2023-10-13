import React from 'react';
import styles from './Footer.module.css';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import logo from '../../assets/funko-logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.icones}>
        <FaFacebook size={'2.4rem'} color={'white'} />
        <AiFillTwitterCircle size={'2.8rem'} color={'white'} />
        <AiFillInstagram size={'2.8rem'} color={'white'} />
      </div>
      <div>
        <Link to={"/"}><img className={styles.footerImg} src={logo} alt=""></img></Link>
      </div>
      <div className={styles.copyright}>
        <p>Desenvolvido por Daniela e Luiza</p>
      </div>

    </div>
  );
}

export default Footer;
