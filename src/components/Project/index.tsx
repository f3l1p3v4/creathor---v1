import Image from 'next/image';

import image1 from "../../files/images/projects/1.png";
import image2 from "../../files/images/projects/2.png";
import image3 from "../../files/images/projects/3.png";
import image4 from "../../files/images/projects/4.png";
import image5 from "../../files/images/projects/5.png";
import image6 from "../../files/images/projects/6.png";
import image7 from "../../files/images/projects/7.png";

import "./styles.css";
import { Tracks } from '../Tracks';

export function Project() {
  return (
    <section id="projects" className="project-wrapper">
      <div className="project-content">
        <div className="project-title">
          <h2>Projetos <span>Sob <br/>Medida </span></h2>
          <p>Websites elegantes a sistemas robustos, nossa equipe especialista em design e desenvolvimento trabalha incansavelmente para criar soluções personalizadas e incríveis.</p>
        </div>
        <div className="project-slide">
          <div className="project-itens">
            <div className="project-item">
              <div className="project-image">
                <Image
                  src={image2}
                  alt="Co-fundador"
                />
              </div>
              <h3>Reitec Engenharia</h3>
              <p>Um site institucional da empresa Reitec para mostrar todos seus serviços de engenharia.</p>
              <a href="https://reitecservicos.com.br" target="_blank" rel="noopener noreferrer" className="project-btn">Acessar</a>
            </div>
            <div className="project-item">
              <div className="project-image">
                <Image
                  src={image1}
                  alt="Co-fundador"
                />
              </div>
              <h3>Devload</h3>
              <p>A DevLoad é um site que visa proporcionar ensino e conteúdo para pessoas que são totalmente iniciantes e também para quem já é programador(a).</p>
              <a href="https://devload.com.br" target="_blank" rel="noopener noreferrer" className="project-btn">Acessar</a>
            </div>
            <div className="project-item">
              <div className="project-image">
                <Image
                  src={image3}
                  alt="Co-fundador"
                />
              </div>
              <h3>Vop Segurança</h3>
              <p>Site da área de segurança para monstrar aos seus clientes um pouco dos seus serviços e fazerem orçamentos</p>
              <a href="https://vopseguranca.com.br" target="_blank" rel="noopener noreferrer" className="project-btn">Acessar</a>
            </div>
            <div className="project-item">
              <div className="project-image">
                <Image
                  src={image4}
                  alt="Co-fundador"
                />
              </div>
              <h3>MSC</h3>
              <p>Site para apresentar todos os serviços prestados pela MSC Telecomunicações.</p>
              <a href="https://msctelecomunicacoes.com.br" target="_blank" rel="noopener noreferrer" className="project-btn">Acessar</a>
            </div>
            <div className="project-item">
              <div className="project-image">
                <Image
                  src={image5}
                  alt="Co-fundador"
                />
              </div>
              <h3>Blog Devload</h3>
              <p>Blog da Devload para desenvolvedores, com conteúdo focado em tudo de tecnologia e carreira.</p>
              <a href="https://blog.devload.com.br" target="_blank" rel="noopener noreferrer" className="project-btn">Acessar</a>
            </div>
            <div className="project-item">
              <div className="project-image">
                <Image
                  src={image6}
                  alt="Co-fundador"
                />
              </div>
              <h3>GT Empreendimentos</h3>
              <p>Site da GT Empreendimentos, uma empresa do setor imobiliário para divulgar o lançamento de mais um empreendimentos (Loft dos Ingleses)</p>
              <a href="https://comercial.gtempreendimentos.com.br" target="_blank" rel="noopener noreferrer" className="project-btn">Acessar</a>
            </div>
            <div className="project-item">
              <div className="project-image">
                <Image
                  src={image7}
                  alt="Co-fundador"
                />
              </div>
              <h3>Barbearia Morumbi</h3>
              <p>Site para facilitar o agendamento de horário para os clientes e também mostrar tudo o que a Barbearia Morumbi oferece.</p>
              <a href="https://barbeariamorumbi.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">Acessar</a>
            </div>
          </div>
        </div>
      </div>
      <Tracks />
    </section>
  )
}
