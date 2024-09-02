import { useNavigate } from 'react-router-dom';
import styles from './Main.module.scss'
import { Button } from 'antd';

export default function Main() {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <Button onClick={() => navigate('/checklist')}>Check List</Button>
      <Button onClick={() => navigate('/manutencao')}>Solicitar Ordem de Manutenção</Button>
      <Button onClick={() => navigate('/abastecimento')}>Registrar Abastecimento</Button>
      <Button href="https://apps.powerapps.com/play/e/default-886666a6-a8d2-4604-a002-95b622cb7e18/a/40a86c20-95d0-4640-b76f-18c0fceef4ea?tenantId=886666a6-a8d2-4604-a002-95b622cb7e18&hint=8eee71b5-c199-4f6c-8511-659d28bee355&sourcetime=1725296705754&source=portal">Logística WEN</Button>
    </div>
  );
}