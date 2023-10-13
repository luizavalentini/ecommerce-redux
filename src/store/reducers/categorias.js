import { createSlice } from "@reduxjs/toolkit";

import anime from '../../assets/categorias/categoria-anime.png';
import filme from '../../assets/categorias/categoria-filmes.png';
import herois from '../../assets/categorias/categoria-super-herois.png';
import seriados from '../../assets/categorias/categoria-seriados.png';
import desenhos from '../../assets/categorias/categoria-desenho.png';

const initialState = [
    {
        nome: "Anime",
        thumbnail: anime,
        header: anime,
        id: 'animes',
        description: 'testes'
    },
    {
        nome: "Filmes",
        thumbnail: filme,
        header: filme,
        id: 'filmes',
        description: 'testes'
    },
    {
        nome: "Super Herois",
        thumbnail: herois,
        header: herois,
        id: 'super herois',
        description: 'testes'
    },
    {
        nome: "Seriados",
        thumbnail: seriados,
        header: seriados,
        id: 'seriados',
        description: 'testes'
    },
    {
        nome: "Desenho",
        thumbnail: desenhos,
        header: desenhos,
        id: 'desenho',
        description: 'testes'
    }
];

const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
});

export default categoriasSlice.reducer;
