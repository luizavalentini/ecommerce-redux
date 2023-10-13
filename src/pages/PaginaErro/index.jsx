import React from 'react';
import { TbError404 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import styles from './PaginaErro.module.css'

const linkStyle = {
    textDecoration: "none",
    color: '#007ceb',
    fontSize: '18px',
    cursor: 'pointer',
  }

const PaginaErro = () => {
  return (
    <div className={styles.containerErro}>
        <TbError404 size={'8rem'}/>
        <p>Oops... This page was not found</p>
        <Link to='./' style={linkStyle} >Return to Home</Link>
      
    </div>
  );
}

export default PaginaErro;
