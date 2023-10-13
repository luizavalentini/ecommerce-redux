import styles from './Banner.module.css';



const BannerCarrinho = () => {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                shopping cart
                </h1>
                <hr />
            </div>
        </div>
        </>
    );
}
export default BannerCarrinho;