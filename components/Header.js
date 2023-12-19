
import {useState} from 'react';
import { AnimatePresence } from 'framer-motion';
import ButtonUI from './ButtonUI';

import Container from './Container';
import styles from './header.module.scss'
import Logo from './Logo'
import Nav from './Nav';
import Row from './Row';
  
const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    return <header className={styles.header}>
    <Container>
        <Row justifyContent="space-between">
            <Logo>

            </Logo>
            <Nav.Desktop>

            </Nav.Desktop>
            <ButtonUI icon="menu" clickHandler={() => {
                setIsMobileNavOpen(true);
            }} />
            <Nav.Mobile />
            <AnimatePresence>
            {isMobileNavOpen && <Nav.Mobile closeHandler={() => {
                setIsMobileNavOpen(false);
            }}/>}
            </AnimatePresence>
            
        </Row>
        
    </Container>
    </header>
}
export default Header;