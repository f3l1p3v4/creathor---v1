'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

import LogoImg from '../../images/logo.png';

import './styles.css';

export function Navbar() {
  const [scrollClass, setScrollClass] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    // Adiciona a classe .scroll no navbar ao descer a tela
    function adicionarClasse() {
      window.addEventListener('scroll', () => {
        const alturaPagina = window.scrollY;
        if (alturaPagina < 10) {
          setScrollClass('');
        } else {
          setScrollClass('scroll');
        }
      });
    }

    // Start
    adicionarClasse();
  }, []);

  // Faz a abertura do menu na versão mobile
  function abrirMenu() {
    setMenuAberto((prevState) => !prevState);
  }

  return (
    <div className={`navbar-wrapper ${scrollClass}`}>
      <nav>
        <Image
          src={LogoImg}
          alt="Logotipo da Empresa Creative"
          placeholder="blur"
        />
        <div className={`options ${menuAberto ? 'show' : ''}`}>
          <Link onClick={abrirMenu} href="/">Home</Link>
          <a onClick={abrirMenu} href='/#servicos'>Serviços</a>
          <a onClick={abrirMenu} href='/#instagram'>Instagram</a>
          <Link onClick={abrirMenu} href="/faleconosco" className="emphasis">Fale Conosco</Link>
        </div>
        <button className={`menu ${menuAberto ? 'active' : ''}`} onClick={abrirMenu}>
          <span className="one"></span>
          <span className="two"></span>
        </button>
      </nav>
    </div>
  );
}
