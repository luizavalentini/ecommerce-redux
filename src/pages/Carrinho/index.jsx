import React from 'react';
import styles from './Carrinho.module.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import BannerCarrinho from 'components/BannerCarrinho';
import CardCompra from 'components/CardCompra';


const Carrinho = () => {
  return (
 <>
 <Header />
 <BannerCarrinho />
 <CardCompra />
 <Footer />
 </>
  )
}

export default Carrinho;
