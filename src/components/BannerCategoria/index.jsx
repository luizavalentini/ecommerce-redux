import React from 'react';
import styles from './BannerCategoria.module.css'


const BannerCategoria = ({ nome, thumbnail, header, id, description }) => {
    return (
        <div className={styles.containerBannerCategoria}>
            <p className={styles.titulo}>{nome}</p>
            <div className={styles.post}>
                <img className={styles.imagem} src={thumbnail} alt="" />
            </div>
        </div>
    );
}

export default BannerCategoria;
