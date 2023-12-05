import styles from './grid.module.scss'

const grid = ({children}) => {
    return <ul className={styles.grid}>
        {children}
    </ul>
}
export default grid;