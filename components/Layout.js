import { Fragment } from 'react';
// import { Header } from './Header'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallToAction from './CallToAction';

const Layout =  ({ children }) => {
    return <Fragment>
    <Header />
    <main>
    {children}
    </main>
    <CallToAction>
        
    </CallToAction>
    <Footer />
    </Fragment>
}
export default Layout;