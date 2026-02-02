import React from 'react';
import maos from '../../assets/img/header/img-tela-inicial.png'
import styles from './Home.module.scss';


export default function Home() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h1>Projetos Sociais</h1>
        <h2>que transformam</h2>
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
      </div>
      <div className={styles.imgContainer} >
        <img src={maos} alt="" />

      </div>

    </section>
  )
}
