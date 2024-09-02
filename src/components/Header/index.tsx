import styles from './Header.module.scss'
import Empilhadeira from '../../assets/empilhadeira.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Empilhadeira} alt="Empilhadeira" />
      <h2>Gerenciamento Logística</h2>
    </header>
  );
}