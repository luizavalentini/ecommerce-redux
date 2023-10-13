
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categoria from './pages/Categoria';
import PaginaErro from 'pages/PaginaErro';
import Carrinho from 'pages/Carrinho';
import ResumoCompra from 'pages/ResumoCompra';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home />} />
        <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/resumoCompra' element={<ResumoCompra />} />
        <Route path="*" element={<PaginaErro/>} />
      </Routes>
    </BrowserRouter>
  );
}

