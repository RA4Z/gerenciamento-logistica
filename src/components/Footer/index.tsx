import Logo from '../../assets/weg_logo_white.png'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <img src={Logo} alt="Logo da Weg" />
            </div>
            <div className={styles.last}>
                Desenvolvido e Prototipado por Robert Aron Zimmermann robertn@weg.net
            </div>
        </footer>
    );
}