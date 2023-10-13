import styles from './CardCompra.module.css';
import { useSelector } from 'react-redux';
import CardColecionavel from 'components/CardColecionavel';
import { Link } from 'react-router-dom';

const CardCompra = () => {

    const { carrinho, total } = useSelector(state => {
        let total = 0;
        const regexp = new RegExp(state.busca, 'i'); 
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade);
            if (item.titulo.match(regexp)) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade,
                });
            }
            return itens;
        }, []);
        return {
            carrinho: carrinhoReduce,
            total,
        };
    });
    return (
        <>
            <div>
                <div className={styles.CardCompra}>
                    <div className={styles.resumo}>
                        {carrinho?.length === 0 ? <h1 className={styles.carrinhoVazio}> Your shopping cart is empty!</h1> :
                            carrinho.map(item => <CardColecionavel key={item.id} {...item} carrinho />)}
                    </div>
                    <div className={styles.barraResumo}>
                        {/* <p>Ver carrinho de Compras:</p> */}
                        <p>Subtotal: <strong> R$ {total.toFixed(2)} </strong></p>
                    </div>
                    <Link to='/resumoCompra'>
                        <button className={styles.finalizaCompra}>Finalize Purchase</button>
                    </Link>

                </div>
            </div>

        </>
    );
}
export default CardCompra;