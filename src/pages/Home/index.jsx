import React from 'react';
import styles from './Home.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import { useState } from 'react';
import CardColecionavel from '../../components/CardColecionavel';

const linkStyle = {
  textDecoration: "none",
  color: 'black',
  fontSize: '10px',
  cursor: 'pointer',
}

const Home = () => {

  const [buscar, setBuscar] = useState(undefined);
  const { categorias, itens } = useSelector(state => {
  const regexp = new RegExp(state.busca, 'i');

    if (state.busca !== buscar) {
      setBuscar(state.busca);
    }
    return {
      categorias: state.categorias.filter(item => item.nome.match(regexp)),
      itens: state.itens.filter(item => item.titulo.match(regexp))
    }
  });
  return (
    <>
      <Header />

      {buscar ?
        <>
          <p className={styles.posttitulo}>CATEGORIAS ENCONTRADAS</p>
          {categorias?.length === 0
            ? <p className={styles.posttitulo}>Nenhum resultado encontrado!</p>
            :
            <div className={styles.post}>
              {categorias.map((categoria) => {
                return <Link key={categoria.id} style={linkStyle} to={`/categoria/${categoria.id}`}>
                  <h1 className={styles.titulo}>{categoria.nome}</h1>
                  <img className={styles.capa} src={categoria.thumbnail} alt="categoria" height="100px" />
                </Link>
              })}
            </div>
          }
          <p className={styles.posttitulo}>COLECIONÁVEIS ENCONTRADOS</p>
          {itens?.length === 0
            ? <p className={styles.posttitulo}>Nenhum resultado encontrado!</p>
            :
            <div className={styles.categoria}>
              <div className={styles.posts}>
                {itens?.map(item => (
                  <CardColecionavel key={item.id} {...item} />
                ))}
              </div>
            </div>}
        </> : <>
          <Banner />
          <p className={styles.posttitulo}>ESCOLHA A SUA CATEGORIA</p>
          <div className={styles.post}>
            {categorias.map((categoria) => {
              return <Link key={categoria.id} style={linkStyle} to={`/categoria/${categoria.id}`}>
                <h1 className={styles.titulo}>{categoria.nome}</h1>
                <img className={styles.capa} src={categoria.thumbnail} alt="categoria" height="100px" />
              </Link>
            })}
          </div>
        </>}
      <Footer />
    </>


  );
}

export default Home;
