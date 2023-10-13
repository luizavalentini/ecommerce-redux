import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';
import itensSlice from './reducers/itens';
import buscaSlice from './reducers/busca';
import carrinhoSlice from './reducers/carrinho';

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        busca: buscaSlice,
        carrinho: carrinhoSlice,
    }
});

export default store;