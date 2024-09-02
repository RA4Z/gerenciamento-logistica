import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss'
import Empilhadeira from '../../assets/empilhadeira.png'
import { useEffect, useState } from 'react';

export default function Header() {
  const [title, setTitle] = useState('')
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setTitle('Gerenciamento Logística')
    if (location.pathname === '/checklist') setTitle('Checagem da Empilhadeira')
    if (location.pathname === '/abastecimento') setTitle('Registrar Abastecimento')
    if (location.pathname === '/manutencao') setTitle('Ordem de Manutenção')
  }, [location.pathname])

  return (
    <header className={styles.header}>
      <img onClick={() => navigate('/')} style={{ cursor: 'pointer' }} src={Empilhadeira} alt="Empilhadeira" />
      <h2>{title}</h2>
    </header>
  );
}