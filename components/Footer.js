import Container from './Container';
import SocialNav from './SocialNav';
import Heading from './Heading';

import styles from './footer.module.scss'



const Footer = () => {
    return <footer className={styles.footer}>
    <Heading level={4} textAlign="center">Connect with us</Heading>
    <SocialNav>
        
    </SocialNav>
    <Heading level={6} textAlign="center">Copyright 2023 Subaru</Heading>
    </footer>
}
export default Footer;