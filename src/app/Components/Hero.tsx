import React from 'react';
import style from './Hero.module.css';
type Props = {}

const Hero = (props: Props) => {
  return (
    <section className={ style.section }>
      <div className={ style.hero }>
        <div>
          <h1>LinhaZERO</h1>
        </div>
        <div>IMAGEM</div>
      </div>
    </section>
  )
}

export default Hero