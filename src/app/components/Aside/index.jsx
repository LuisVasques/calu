import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo.png'

export const Aside = () => {
    return (<aside className={styles.aside}>
        <Image src={logo} className={styles.img}/>
        {/* <img className={styles.img} src="/logo.png" alt="logo CALU"/> */}
        </aside>)

}