import { useLocation } from 'react-router-dom';
import styles from './Header.module.scss'
import Empilhadeira from '../../assets/empilhadeira.png'
import { useEffect, useState } from 'react';

export default function Header() {
  const [title, setTitle] = useState('')
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setTitle('Gerenciamento Logística')
    if (location.pathname === '/abastecimento') setTitle('Registrar Abastecimento')
    if (location.pathname === '/manutencao') setTitle('Ordem de Manutenção')
  }, [location.pathname])

  return (
    <header className={styles.header}>
      <img src={Empilhadeira} alt="Empilhadeira" />
      <h2>{title}</h2>
    </header>
  );
}