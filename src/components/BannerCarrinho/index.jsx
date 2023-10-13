import styles from './Banner.module.css';



const BannerCarrinho = () => {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    carrinho de compra
                </h1>
                <hr />
            </div>
        </div>
        </>
    );
}
export default BannerCarrinho;