import Image from 'next/image';

import { FaWhatsappSquare } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

import LogoImg from '../../images/logo.png';

import './styles.css';

export function Footer() {
  return (
    <footer>
      <section className='footer-contact'>
        <div>
          <div>
            <FaWhatsappSquare />
            <h6>Whatsapp</h6>
          </div>
          <p>67 99353-4131</p>
        </div>
        <div>
          <div>
            <MdEmail />
            <h6>Email</h6>
          </div>
          <p>creathorweb@gmail.com</p>
        </div>
        <div>
          <div>
            <FaInstagramSquare />
            <h6>Instagram</h6>
          </div>
          <p>@creathor.web</p>
        </div>
      </section>
      <section className='footer-copy'>
        <Image
          src={LogoImg}
          alt="Logotipo da Empresa Creative"
          placeholder="blur"
        />
        <p> © 2020. Todos os direitos reservados.</p>
      </section>
    </footer>
  )
}
