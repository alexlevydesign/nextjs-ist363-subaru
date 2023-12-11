import styles from './grid.module.scss'

const grid = ({children}) => {
    return <section className={styles.grid}>
        {children}
    </section>
}
export default grid;