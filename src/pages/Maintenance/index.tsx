import { useNavigate } from 'react-router-dom';
import styles from './Maintenance.module.scss'
import { Input, Button, notification, DatePicker } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs'
import { saveData } from 'services/firestore';

export default function Maintenance() {
  const [dados, setDados] = useState({ data: '', numeroEmpilhadeira: '', nomeSolicitante: '', problema: '', turno: '' })
  const navigate = useNavigate()
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: 'error', texto: string) => {
    api[type]({
      message: 'Erro ao Salvar Dados',
      description: texto,
    });
  };

  async function saveFiles() {
    // Validação dos campos
    if (!dados.data) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de data.');
      return;
    }
    if (!dados.numeroEmpilhadeira) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de número da empilhadeira.');
      return;
    }
    if (!dados.nomeSolicitante) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de nome do solicitante.');
      return;
    }
    if (!dados.problema) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de problema.');
      return;
    }
    if (!dados.turno) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de turno.');
      return;
    }

    try {
      // Salva os dados no Firestore
      const result = await saveData(dados, 'maintenance');
      if (result === 'erro') {
        openNotificationWithIcon('error', 'Ocorreu algum erro ao salvar os dados. Por favor, tente novamente.');
        return;
      }
      // Se a operação foi bem-sucedida, redireciona para a página inicial
      navigate('/');
    } catch (error) {
      // Se ocorrer algum erro durante o salvamento, exibe uma mensagem de erro
      openNotificationWithIcon('error', 'Ocorreu um erro ao salvar os dados.');
      console.error('Erro ao salvar dados:', error);
    }
  }

  return (
    <div className={styles.container}>
      {contextHolder}
      <h1>Maintenance</h1>

      <DatePicker
        format='DD/MM/YYYY'
        value={dados.data !== '' ? dayjs(dados.data) : null} // Verifica se dados.data está preenchido
        onChange={(e) => {
          if (e === null) {
            setDados({ ...dados, data: '' }); // Define dados.data como null quando a data for removida
          } else {
            setDados({ ...dados, data: dayjs(e).format('YYYY-MM-DD').toString() });
          }
        }}
        placeholder='Data' />
      <Input value={dados.numeroEmpilhadeira} onChange={e => setDados({ ...dados, numeroEmpilhadeira: e.target.value })} placeholder="Número da Empilhadeira" />
      <Input value={dados.nomeSolicitante} onChange={e => setDados({ ...dados, nomeSolicitante: e.target.value })} placeholder="Nome do Solicitante" />
      <Input value={dados.problema} onChange={e => setDados({ ...dados, problema: e.target.value })} placeholder="Problema" />
      <Input value={dados.turno} onChange={e => setDados({ ...dados, turno: e.target.value })} placeholder="Turno" />

      <div className={styles.buttons}>
        <Button onClick={() => navigate('/')}>Cancelar</Button>
        <Button type="primary" onClick={() => saveFiles()}>Enviar</Button>
      </div>
    </div>
  );
}