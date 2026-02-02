import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Acoes from '../../pages/Acoes/Acoes'
import Quem from '../../pages/Quem/Quem'
import Perfil from '../Perfil/Perfil'
import styles from'./NavBar.module.scss'

import logo from '../../assets/img/logo/logo.png'
import perfil from '../../assets/img/perfil/tais.png'


export default function NavBar() {
  return (
    <BrowserRouter>
      <nav className={styles.navbar}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt="Logo do projeto Connect" />
        </Link>        
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/acoes'>Ações da Connect</Link></li>
          <li><Link to='/quem'>Quem Somos</Link></li>
        </ul>

        <Link to='/perfil'>
          <img className={styles.perfil} src={perfil} alt="Perfil voluntário" />
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/acoes' element={<Acoes />}/>
        <Route path='/quem' element={<Quem />}/>
        <Route path='/perfil' element={<Perfil />}/>
      </Routes> 
     

    </BrowserRouter>

  )
}
