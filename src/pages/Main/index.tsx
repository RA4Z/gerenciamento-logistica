import styles from './Main.module.scss'
import { Button } from 'antd';

export default function Main() {
  return (
    <div className={styles.container}>
      <Button>Check List</Button>
      <Button>Solicitar Ordem de Manutenção</Button>
      <Button>Registrar Abastecimento</Button>
      <Button>Logística WEN</Button>
    </div>
  );
}