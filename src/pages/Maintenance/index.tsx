import { useNavigate } from 'react-router-dom';
import styles from './Maintenance.module.scss'
import { Input, Button, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'

export default function Maintenance() {
  const [dados, setDados] = useState({ data: '', numeroEmpilhadeira: '', nomeSolicitante: '', problema: '', turno: '' })
  const navigate = useNavigate()

  useEffect(() => {
    console.log(dados)
  }, [dados])

  return (
    <div className={styles.container}>
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
        <Button type="primary">Enviar</Button>
      </div>
    </div>
  );
}