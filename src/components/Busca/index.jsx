import React from 'react';
import styles from './Busca.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
;

const Busca = () => {

  const busca = useSelector(state => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch])

  return (
    <div className={styles.busca}>
      <input
        id='buscar'
        className={styles.input}
        placeholder='O que você procura?'
        defaultValue={busca}
        onChange={(evento)=> {
          if(!evento.target.value){
            dispatch(resetarBusca());
          }
        }}
      />
      <BiSearchAlt2 className={styles.buscaIcone} onClick={() => {
        const buscar = document.getElementById('buscar');
        if (buscar !== undefined && buscar.value !== "") {
          dispatch(mudarBusca(buscar.value));
        }
      }} size={'1.5rem'} color={'grey'} />
    </div>


  );
}

export default Busca;
