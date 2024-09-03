import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss'
import { Input, Button, notification, DatePicker } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs'
import { saveData } from 'services/firestore';

export default function Maintenance() {
  const [dados, setDados] = useState({ dataHora: '', numeroEmpilhadeira: '', operador: '', quantidadeAbastecida: '', localPitStop: '' })
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
    if (!dados.dataHora) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de Data e Hora.');
      return;
    }
    if (!dados.numeroEmpilhadeira) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de Número da Empilhadeira.');
      return;
    }
    if (!dados.operador) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de nome do Operador.');
      return;
    }
    if (!dados.quantidadeAbastecida) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de Quantidade Abastecida.');
      return;
    }
    if (!dados.localPitStop) {
      openNotificationWithIcon('error', 'Por favor, preencha o campo de Local Pit Stop.');
      return;
    }

    try {
      // Salva os dados no Firestore
      const result = await saveData(dados, 'abastecimento');
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
      <h1>Registro de Abastecimento</h1>

      <DatePicker
        format='DD/MM/YYYY HH:mm:ss'
        showTime
        value={dados.dataHora !== '' ? dayjs(dados.dataHora) : null} // Verifica se dados.data está preenchido
        onChange={(e) => {
          if (e === null) {
            setDados({ ...dados, dataHora: '' }); // Define dados.data como null quando a data for removida
          } else {
            setDados({ ...dados, dataHora: dayjs(e).format('YYYY-MM-DD HH:mm:ss').toString() });
          }
        }}
        placeholder='Data' />
      <Input value={dados.numeroEmpilhadeira} onChange={e => setDados({ ...dados, numeroEmpilhadeira: e.target.value })} placeholder="Número da Empilhadeira" />
      <Input value={dados.operador} onChange={e => setDados({ ...dados, operador: e.target.value })} placeholder="Nome do Operador" />
      <Input value={dados.quantidadeAbastecida} onChange={e => setDados({ ...dados, quantidadeAbastecida: e.target.value })} placeholder="Quantidade Abastecida" />
      <Input value={dados.localPitStop} onChange={e => setDados({ ...dados, localPitStop: e.target.value })} placeholder="Local Pit Stop" />

      <div className={styles.buttons}>
        <Button onClick={() => navigate('/')}>Cancelar</Button>
        <Button type="primary" onClick={() => saveFiles()}>Enviar</Button>
      </div>
    </div>
  );
}