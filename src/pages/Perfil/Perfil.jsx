import React from 'react'
import styles from './Perfil.module.scss'
import PhotoPerfil from '../../assets/img/perfil/tais.png'


export default function Perfil() {
  return (
    <section className={styles.mainContainer}>   
      <article className={styles.perfil}>
        <div className={styles.photoContainer}>
          <img src={PhotoPerfil} alt="Foto do voluntário" className={styles.photo} />
        </div>
        <div className={styles.infosPerfil}>
          <h2>Taís Guimarães</h2>
          <p className={styles.status}>Voluntário Ativo</p>
          <p className={styles.sobre}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
          <address className={styles.infos}>
            <p>Salvador/BA</p>
            <p>taisgb@gmail.com</p>
            <p>Membro desde Fevereiro 2026</p>
          </address>
          <div className={styles.tags}>
            <p>Educação</p>
            <p>Meio ambiente</p>
            <p>Assistência social</p>
          </div>
        </div>
      </article>      
    </section>
  )
}
