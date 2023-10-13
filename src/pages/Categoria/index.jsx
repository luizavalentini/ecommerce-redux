import CardColecionavel from '../../components/CardColecionavel';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './Categoria.module.css';
import BannerCategoria from 'components/BannerCategoria';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    color: 'black',
    fontSize: '10px',
    cursor: 'pointer',
  }
const Categoria = () => {

    const [buscar, setBuscar] = useState(undefined);
    const { nomeCategoria } = useParams();
    const { categoria, categorias, itens } = useSelector(state => {
        const regexp = new RegExp(state.busca, 'i');
        if (state.busca !== buscar) {
            setBuscar(state.busca);
        }
        return {
            categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
            categorias: state.categorias.filter(item => item.nome.match(regexp)),
            itens: state.busca ? state.itens.filter(item => item.titulo.match(regexp)) : state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp))
        }
    });

    return (
        <>
            <Header />

            {
                buscar ?
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
                    </>
                    : categoria === undefined ?
                        <h1 className={styles.categoriaInvalida}>Categoria não encontrada!</h1>
                        :
                        <>
                            <BannerCategoria {...categoria} />
                            <div className={styles.categoria}>
                                <div className={styles.posts}>
                                    {itens?.map(item => (
                                        <CardColecionavel key={item.id} {...item} />
                                    ))}
                                </div>
                            </div>
                        </>
            }

            <Footer />

        </>
    );
}

export default Categoria;
