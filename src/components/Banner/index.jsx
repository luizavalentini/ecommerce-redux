import styles from './Banner.module.css';
import fotoBanner from '../../assets/banner.svg'
import categorias from '../../assets/categorias.svg';
const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                   
                    <h1>Colecionáveis</h1>

                    <p className={styles.paragrafo}>
                        Conheça a nossa sessão de itens colecionáveis!!!
                    </p>
                    <hr />
                    <div></div>
                
                </div>
            </div>
        </>
    );
}
export default Banner;