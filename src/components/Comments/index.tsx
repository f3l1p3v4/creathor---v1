import Image from 'next/image';

import juniorImg from "../../files/images/junior.jpg";
import felipemarsuraImg from "../../files/images/felipemarsura.jpg";
import gabrielImg from "../../files/images/gabriel.jpg";

import "./styles.css";

export function Comments() {
  return (
    <section className="comments-wrapper">
      <div className="comments-content">
        <div className="comments-students">
          <div className="comments-student">
            <Image
              className="img-student"
              src={juniorImg}
              alt="Check"
            />
            <div className="comments-text">
              <p>A atenção aos detalhes e a habilidade em capturar a essência da minha marca foram notáveis. Estou muito satisfeito e grato por ter escolhido a <span>Creathor</span> para o desenvolvimento do meu site.</p>
            </div>
            <span>Eng. Reinaldo Jr - Reitec Engenharia</span>
          </div>
          <div className="comments-student">
            <Image
              className="img-student"
              src={felipemarsuraImg}
              alt="Check"
            />
            <div className="comments-text">
              <p>Simplesmente incrível! A qualidade do trabalho entregue foi excepcional. Eles criaram para mim sites elegantes e intuitivos, facilitando muito os processos do meu negócio.</p>
            </div>
            <span>Felipe Marsura - Gestor de Tráfego</span>
          </div>
          <div className="comments-student">
            <Image
              className="img-student"
              src={gabrielImg}
              alt="Check"
            />
            <div className="comments-text">
              <p>Fiquei impressionado! O pessoal que fez meu site e sistema arrasou total! Eles entenderam direitinho o que eu queria e transformaram em algo incrível.</p>
            </div>
            <span>Gabriel Nascimento - Barbearia Morumbi</span>
          </div>
        </div>
        <div className="comments-title">
          <h2>O que <span>nossos clientes</span> dizem</h2>
          <p>Nosso compromisso com a excelência é evidenciado pelos elogios e comentários de nossos clientes satisfeitos.</p>
        </div>
      </div>
    </section>
  )
}
