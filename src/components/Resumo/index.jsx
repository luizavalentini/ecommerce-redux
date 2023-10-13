import { useSelector } from "react-redux";
import styles from "./Resumo.module.css";

const Resumo = () => {
  const { carrinho, total } = useSelector((state) => {
    let total = 0;
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      total += item.preco * itemNoCarrinho.quantidade;
      itens.push({
        ...item,
        quantidade: itemNoCarrinho.quantidade,
      });
      return itens;
    }, []);
    console.log(total, carrinhoReduce);
    return { carrinho: carrinhoReduce, total };
  });
  return (
    <>
      <div className={styles.wrapperResumo}>
        <div className={styles.containerResumo}>
          <div className={styles.produtosTitulo}>
            <p className={styles.produtosTitulo}>
              Confira os produtos que você comprou{" "}
            </p>
            <hr className={styles.hr}></hr>
          </div>
          <div className={styles.produtosResumo}>
            {carrinho.map((item) => (
              <>
                <p className={styles.categoriasResumoTitulo}>{item.titulo}</p>
                <p className={styles.categoriasResumoTitulo}>
                  {" "}
                  Qtd: {item.quantidade}
                </p>
                <p className={styles.categoriasResumoTitulo}>
                  <strong> R$:{item.preco} </strong>
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.barraResumo}>
        <p className={styles.subtotal}>
          Subtotal: <strong> R${total.toFixed(2)} </strong>
        </p>
      </div>
    </>
  );
};

export default Resumo;
