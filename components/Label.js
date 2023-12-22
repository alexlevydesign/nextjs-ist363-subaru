import { steps } from 'framer-motion';
import styles from './label.module.scss';

const Label = ({children}) => {
    return <label className={styles.label}>{children}</label>
}
export default Label;