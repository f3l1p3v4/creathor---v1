import Image from 'next/image';

import instaLogo from "../../images/instagram-logo.png";

import InstaIcon from '../../files/images/insta.svg';

import "./styles.css";

export function Social() {
  return (
    <section id='instagram' className="social-wrapper">
      <div className="social-logo">
        <Image
          src={instaLogo}
          alt="Logo Instagram"
        />
      </div>
      <div className="social-circle">
        <div className="social-line social-line-one"></div>
        <div className="social-line social-line-two"></div>
        <div className="social-line social-line-three"></div>
        <div className="social-line social-line-four"></div>
      </div>
      <div className="social-title">
        <h2>Acompanhe <span>nosso Instagram</span></h2>
        <p>Convidamos você a se juntar à nossa comunidade online no Instagram. Siga-nos para estar sempre por dentro das últimas novidades</p>
        <a href="https://www.instagram.com/creathor.web/">
          Ver Instagram
          <Image
            className="img-insta-btn"
            src={InstaIcon}
            alt="Check"
          />
        </a>
      </div>
    </section>
  )
}
