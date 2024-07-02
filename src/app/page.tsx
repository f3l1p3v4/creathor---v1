'use client';

import { Presentation } from '@/components/Presentation';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Project } from '@/components/Project';
import { Comments } from '@/components/Comments';
import { Social } from '@/components/Social';
import { Footer } from '@/components/Footer';
import { ButtonMessage } from "../components/ButtonMessage";

export default function Home() {
  return (
    <main>
      <Presentation />
      <Skills />
      <Project />
      <About />
      <Comments />
      <Social />
      <Footer />
      <ButtonMessage />
    </main>
  )
}
