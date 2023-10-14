import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import animeUm from 'assets/itens/anime-1.png';
import animeDois from 'assets/itens/anime-2.png';
import animeTres from 'assets/itens/anime-3.png';
import animeQuadro from 'assets/itens/anime-4.png';
import filmeUm from 'assets/itens/filme-1.png';
import filmeDois from 'assets/itens/filme-2.png';
import filmeTres from 'assets/itens/filme-3.png';
import filmeQuadro from 'assets/itens/filme-4.png';
import heroisUm from 'assets/itens/herois-1.png';
import heroisDois from 'assets/itens/herois-2.png';
import heroisTres from 'assets/itens/herois-3.png';
import heroisQuatro from 'assets/itens/herois-4.png';
import seriadoUm from 'assets/itens/seriado-1.png';
import seriadoDois from 'assets/itens/seriado-2.png';
import seriadoQuatro from 'assets/itens/seriado-3.png';
import seriadoTres from 'assets/itens/seriado-4.png';
import desenhoUm from 'assets/itens/desenho-1.png';
import desenhoDois from 'assets/itens/desenho-2.png';
import desenhoTres from 'assets/itens/desenho-3.png';
import desenhoQuatro from 'assets/itens/desenho-4.png';


const initialState = [{
  titulo: 'anime Yuri & Seijin ',
  descricao: 'Yuri Seijin Naoko-san is a manga written and illustrated by the manga author Kashmir.',
  foto: animeUm,
  favorito: false,
  preco: 499.99,
  id: uuid(),
  categoria: 'animes'
}, {
  titulo: 'Yukio Okumura ',
  descricao: 'Ao no Exorcist, also known in the West as Blue Exorcist, is a manga series published since 2009.',
  foto: animeDois,
  favorito: false,
  preco: 219.90,
  id: uuid(),
  categoria: 'animes'
}, {
  titulo: 'Dragon Ball Super',
  descricao: 'Dragon Ball is possibly the most well-known anime of all time, a creation by Akira Toriyama that began as a manga.',
  foto: animeTres,
  favorito: false,
  preco: 219.90,
  id: uuid(),
  categoria: 'animes'
}, {
  titulo: 'Shoto Todo',
  descricao: 'In a world where almost the entire population has some superhuman power, the boy Izuku Midoriya is one of the few cases of ordinary people.',
  foto: animeQuadro,
  favorito: false,
  preco: 320.90,
  id: uuid(),
  categoria: 'animes'
}, {
  titulo: 'Leatherface Ultimate',
  descricao: 'Leatherface Ultimate Figure Articulated Doll - The Texas Chainsaw Massacre - Texas Chainsaw Massacre - NECA.',
  foto: filmeUm,
  favorito: false,
  preco: 329.90,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Alien Warrior 1986',
  descricao: 'Alien Warrior 1986 Blue Ultimate Articulated Figure - NECA',
  foto: filmeDois,
  favorito: false,
  preco: 369.90,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Jessica Rabbit',
  descricao: 'Jessica Rabbit Reaction Figures Wave 1 - Who Framed Roger Rabbit - Who Framed Roger Rabbit - Super7',
  foto: filmeTres,
  favorito: false,
  preco: 290,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Roger Rabbit ',
  descricao: 'Roger Rabbit Reaction Figures Wave 1 - Who Framed Roger Rabbit - Who Framed Roger Rabbit - Super7.',
  foto: filmeQuadro,
  favorito: false,
  preco: 120.99,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Man-Bat DC ',
  descricao: 'Man-Bat Megafis DC Rebirth Articulated Doll - DC Multiverse - Mcfarlane Toys',
  foto: heroisUm,
  favorito: false,
  preco: 599.90,
  id: uuid(),
  categoria: 'super herois'
}, {
  titulo: 'Batman Arkham City',
  descricao: 'Batman Arkham City Articulated Doll - DC Multiverse - Mcfarlane Toys',
  foto: heroisDois,
  favorito: false,
  preco: 369.99,
  id: uuid(),
  categoria: 'super herois'
}, {
  titulo: 'Eternal Clan Dragon',
  descricao: 'Eternal Clan Dragon Series 8 Mcfarlane Toys',
  foto: heroisTres,
  favorito: false,
  preco: 279.75,
  id: uuid(),
  categoria: 'super herois'
}, {
  titulo: 'Wonder Woman',
  descricao: 'Wonder Woman Statue Wonder Woman ArtFX 1/6 1984 Movie Kotobukiya',
  foto: heroisQuatro,
  favorito: false,
  preco: 149.90,
  id: uuid(),
  categoria: 'super herois'
}, {
  titulo: 'Zombie Walker',
  descricao: 'Shane Walsh after becoming zombie, TV Series Series 2 Walking Dead Mcfarlan',
  foto: seriadoUm,
  favorito: false,
  preco: 285.56,
  id: uuid(),
  categoria: 'seriados'
}, {
  titulo: 'Lieutenant Commander',
  descricao: 'Lieutenant Commander Data Next Generation Star Trek Universe Collection Playmates.',
  foto: seriadoDois,
  favorito: false,
  preco: 328.88,
  id: uuid(),
  categoria: 'seriados'
}, {
  titulo: 'Captain Jean-Luc Picard',
  descricao: 'Captain Jean-Luc Picard Next Generation Star Trek Universe Collection Playmates.',
  foto: seriadoTres,
  favorito: false,
  preco: 227.68,
  id: uuid(),
  categoria: 'seriados'
}, {
  titulo: 'Khan The Wrath',
  descricao: 'Khan The Wrath of Khan Star Trek Universe Collection Playmates',
  foto: seriadoQuatro,
  favorito: false,
  preco: 44.90,
  id: uuid(),
  categoria: 'seriados'
}, {
  titulo: 'Tomax Paoli 6',
  descricao: 'Tomax Paoli 6 Classified Series G.I. Joe Figure Hasbro',
  foto: desenhoUm,
  favorito: false,
  preco: 559,
  id: uuid(),
  categoria: 'desenho'
}, {
  titulo: 'Duo Penn and Teller Simpsons',
  descricao: 'Duo Penn and Teller Simpsons 25 of the Greatest Guest Stars Series 3 NECA',
  foto: desenhoDois,
  favorito: false,
  preco: 417.33,
  id: uuid(),
  categoria: 'desenho'
}, {
  titulo: 'Bravio Mastim Dog',
  descricao: 'Wild Dog Mastiff doll complete Commands in Action Gi Joe Estrela',
  foto: desenhoTres,
  favorito: false,
  preco: 199,
  id: uuid(),
  categoria: 'desenho'
}, {
  titulo: 'Cobra Doll',
  descricao: 'Cobra Doll Arms Smuggling Outlaw Complete right-handed Commandos in Action Gi Joe Estrela',
  foto: desenhoQuatro,
  favorito: false,
  preco: 782.91,
  id: uuid(),
  categoria: 'desenho'
}];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if (item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    }
  }
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;