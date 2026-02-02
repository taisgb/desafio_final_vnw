import React, { useState } from 'react'
import styles from './Acoes.module.scss';



//Imgs
import reciclagem from '../../assets/img/cards/mutirao.png';
import aulas from '../../assets/img/cards/aulas.png';
import esporte from '../../assets/img/cards/esporte.png';
import familia from '../../assets/img/cards/familia.png';
import futuro from '../../assets/img/cards/futuro.png';
import conecta from '../../assets/img/cards/conecta.png'

export default function Acoes() {

  const [card, setCard] = useState([
    {
      id: 1,
      title: 'Multirão de reciclagem',
      description: 'Coletar materiais recicláveis e orientar sobre descarte consciente.',
      img: reciclagem,
    },
    {
      id: 2,
      title: 'Aulas de Tecnologia',
      description: 'Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.',
      img: aulas
    },
    {
      id: 3,
      title: 'Esporte e Inclusão',
      description: 'Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.',
      img: esporte
    },
    {
      id: 4,
      title: 'Instituto grande familia',
      description: 'Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.',
      img: familia,
    },
    {
      id: 5,
      title: 'Projeto Futuro na Escola',
      description: 'Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.',
      img: futuro,
    },
    {
      id: 6,
      title: 'Instituto Conecta Jovem',
      description: 'Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.',
      img: conecta,
    },
    
  ])
  
  return (
    <section className={styles.mainContainer}>
      
      <h2>Ações da Connect</h2>
      <p>Junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
      
      <div className={styles.cardsContainer}>
        {card.map((item) => (
          <article className={styles.card} key={item.id}>
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button>Quero participar</button>          
        </article>  
        )

        )}
            
      </div>
    </section>
  )
}
