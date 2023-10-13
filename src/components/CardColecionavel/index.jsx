import React from 'react';
import styles from './CardColecionavel.module.css';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle
} from 'react-icons/ai';

import {
  FaCartPlus,
} from 'react-icons/fa';
import {
  BsCartDashFill
} from 'react-icons/bs';

import { mudarFavorito } from 'store/reducers/itens';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho';

const iconeProps = {
  size: 24,
  color: '#ffffff',
};

const quantidadeProps = {
  size: 32,
  color: '	#007ceb'
}

const CardColecionavel = ({
  titulo,
  descricao,
  foto,
  favorito,
  preco,
  id,
  categoria,
  carrinho,
  quantidade, }) => {

  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNoCarrinho => itemNoCarrinho.id === id));

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  return (
    <>
      <div className={carrinho ? styles.postCarrinho : styles.post}>
        <div className={carrinho ? styles.itemCarrinho : styles.item}>
          <p className={styles.titulo}>{titulo}</p>
          <img className={styles.imagemItens} src={foto} alt=""></img>
          <p className={styles.descricao}>Sobre o item: {descricao}</p>

        </div>
        <div className={carrinho ? styles.containerDetalhesCarrinho : styles.containerDetalhes}>
          <div className={styles.containerPreco}>
            <p className={styles.valor}>R${preco.toFixed(2)}</p>
          </div>
          {favorito ? <AiFillHeart color='#007ceb' onClick={resolverFavorito} size={'2rem'} />
            : <AiOutlineHeart size={'2rem'} color='white' onClick={resolverFavorito} />
          }
          {carrinho
            ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantidadeProps}
                  onClick={() => {
                    if (quantidade > 1) {
                      dispatch(mudarQuantidade({ id, quantidade: -1 }));
                    } else if (Number(quantidade) === 1) {
                      dispatch(mudarCarrinho(id));
                    }
                  }}
                />
                <span>{String(quantidade || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...quantidadeProps}
                  onClick={() => dispatch(mudarQuantidade({ id, quantidade: +1 }))}
                />
              </div>
            )
            : (!estaNoCarrinho ? <FaCartPlus
              {...iconeProps}
              color=" #007ceb"
              className={styles['item-acao']}
              onClick={resolverCarrinho}
            /> : <BsCartDashFill
              {...iconeProps}
              color={'#a0ff91FF'}
              className={styles['item-acao']}
              onClick={resolverCarrinho}
            />)
          }

        </div>
      </div>

    </>
  );
}

export default CardColecionavel;
