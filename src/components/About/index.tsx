'use client'

import Image from 'next/image';

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import gabiImg from "../../files/images/gabi.jpg";
import felipeImg from "../../files/images/felipe.jpg";

import './styles.css';

export function About() {
  return (
    <section className="about-wrapper">
      <div className="about-title">
        <h2>Um <span>pouco mais</span> sobre nós</h2>
        <p>Estamos dedicados a ajudar pessoas e empresas a explorarem todo o potencial da tecnologia, orientando-as a alcançar soluções inovadoras.</p>
      </div>
      <section className="about-cards">
        <div className="about-card">
          <div className="about-photo">
            <Image
              src={felipeImg}
              alt="Co-fundador"
            />
          </div>
          <h2>Felipe Valdez</h2>
          <h3>Co-fundador</h3>
          <p>Começou a programar em 2018, atualmente é desenvolvedor freelancer e também o fundador da <a href='https://devload.com.br'>Devload</a>.</p>
          <div className='card-social'>
            <a href="https://github.com/f3l1p3v4" className='link-social'>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/felipe-valdez-a0462a142/" className='link-social'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="about-card">
          <div className="about-photo">
            <Image
              src={gabiImg}
              alt="Co-fundadora"
            />
          </div>
          <h2>Gabriela Alice</h2>
          <h3>Co-fundadora</h3>
          <p>Apaixonada por conectar pessoas com soluções digitais. Com experiência sólida em vendas e gestão financeira.</p>
          <div className='card-social'>
            <a href="https://www.linkedin.com/in/g4briela/" className='link-social'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}
