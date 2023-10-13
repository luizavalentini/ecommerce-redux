import React from 'react';
import styles from '../BannerCarrinho/Banner.module.css';

const BannerResumo = () => {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Purchase summary
                </h1>
                <hr />
            </div>
        </div>
        </>
    );
}

export default BannerResumo;
