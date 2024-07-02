import Image from 'next/image';
import Link from 'next/link';

import MoonImg from '../../images/moon.png';
import CheckIcon from '../../files/images/check.svg';

import './styles.css';

export function Presentation() {
  return (
    <div className='presentation-wrapper'>
      <section>
        <div className="presentation-text">
          <h1>Transformamos <span>ideias incríveis</span> em <span>realidade</span></h1>
          <p>A chave para o seu sucesso online começa aqui, onde transformamos suas ideias e metas em resultados extraordinários.</p>
          <Link href="/faleconosco">
            Iniciar Projeto
            <Image
              className="img-check"
              src={CheckIcon}
              alt="Check"
            />
          </Link>
        </div>
        <Image
          className="moon"
          src={MoonImg}
          alt="Lua girando"
        />
        <div className="moon">
        </div>
      </section>
    </div>
  )
}
