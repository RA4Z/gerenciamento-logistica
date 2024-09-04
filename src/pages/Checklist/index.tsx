import styles from './Checklist.module.scss'
export default function Checklist(): JSX.Element {
  return (
    <iframe
      className={styles.container}
      src="https://docs.google.com/forms/d/e/1FAIpQLSdXAB1XcDShp1EQdIEJjfWf_NluBk6SWpawzMOLUntJNrXr6Q/viewform?embedded=true"
      title="Formulário de Checklist">
      Carregando…
    </iframe>
  );
}