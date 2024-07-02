import Image from 'next/image';

import juniorImg from "../../files/images/junior.jpg";
import felipemarsuraImg from "../../files/images/felipemarsura.jpg";
import gabrielImg from "../../files/images/gabriel.jpg";

import "./styles.css";

export function Project() {
  return (
    <section className="project-wrapper">
      <div className="project-content">
        <div className="project-title">
          <h2>Projetos <span>Sob Medida </span> para o Seu <span>Sucesso</span></h2>
          <p>De websites elegantes a sistemas robustos, nossa equipe especialista em design e desenvolvimento trabalha incansavelmente para criar soluções personalizadas que atendem às necessidades específicas de nossos clientes.</p>
        </div>
      </div>
    </section>
  )
}
