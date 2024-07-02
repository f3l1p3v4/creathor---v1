'use client';

import React, { useState } from "react";
import Image from 'next/image';

import { FaWhatsapp } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";

import UserIcon from '../../files/images/icone-usuario.png';
import WhatsIcon from '../../files/images/icone-whatsapp.png';

import "./styles.css";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className='popup-container'>
      <div className='popup'>
        <h2>Espere um instante!</h2>
        <p>Vamos dar vida ao seu projeto online juntos? Deixe seus dados de contato para começarmos!</p>
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
            <div className="exit-group-btn">
              <button onClick={onClose} className="exit-btn-cancel">
                <div className="form-texto">
                  <MdCancel />
                  <h3>Fechar</h3>
                </div>
                <div className="exit-faixa exit-faixa-cancel"></div>
              </button>
              <button type="submit">
                <div className="form-texto">
                  <FaWhatsapp />
                  <h3>Enviar Agora</h3>
                </div>
                <div className="exit-faixa exit-faixa-confirm"></div>
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};
