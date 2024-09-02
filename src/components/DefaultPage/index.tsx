import { Outlet } from 'react-router-dom'
import styles from './DefaultPage.module.scss'
import Header from '../Header'
import Footer from '../Footer'

export default function DefaultPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}