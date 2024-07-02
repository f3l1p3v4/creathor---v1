'use client';

import React, { useState } from "react";
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

import PersonaImg from '../../files/images/foto-pessoa.png';
import UserIcon from '../../files/images/icone-usuario.png';
import WhatsIcon from '../../files/images/icone-whatsapp.png';

import './styles.css';

export function Form() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || telephone === "") {
      alert("Favor complete todos os campos!");
    } else {
      let message = encodeURI(
        `Olá, meu nome é ${name} meu telefone é ${telephone}, gostaria de saber um pouco mais sobre vocês`
      );

      window.location.replace(`https://wa.me/+5567993534131?text=${message}`);

      setName("");
      setTelephone("");
    }
  };

  return (
    <>
      <div className="form-frase">
        <h3>Não perca tempo. E começe sua presença online hoje.</h3>
      </div>
      <section className="form-apresentacao">
        <div className="form-foto">
          <Image
            src={PersonaImg}
            className="form-img-pessoa"
            alt="Logotipo da Empresa Creative"
            placeholder="blur"
          />
          <div className="form-efeito">
            <div className="form-blush"></div>
            <div className="form-circulo form-um"></div>
            <div className="form-circulo form-dois"></div>
            <div className="form-circulo form-tres"></div>
          </div>
        </div>
        <div className="form-captura">
          <div className="form-titulo">
            <h2>Olá!</h2>
            <p>Preencha os campos abaixo com seu nome e número do whatsapp.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Qual seu nome?</label>
            <div className="form-input">
              <Image
                src={UserIcon}
                className="form-icon"
                alt="Logotipo da Empresa Creative"
                placeholder="blur"
              />
              <input
                type="text"
                name="name"
                placeholder="Digite aqui..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label>Qual seu whatsapp?</label>
            <div className="form-input">
              <Image
                src={WhatsIcon}
                className="form-icon"
                alt="Logotipo da Empresa Creative"
                placeholder="blur"
              />
              <input
                type="tel"
                name="telephone"
                placeholder="(00) 00000-0000"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            {/* <label>Qual seu e-mail?</label>
            <div className="form-input">
              <Image
                src={EmailIcon}
                className="form-icon"
                alt="Logotipo da Empresa Creative"
                placeholder="blur"
              />
              <input type="email" autoComplete="email" placeholder="email@email.com" />
            </div> */}
            <button type="submit">
              <div className="form-texto">
                <FaWhatsapp />
                <h3>Enviar Agora</h3>
              </div>
              <div className="form-faixa"></div>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
