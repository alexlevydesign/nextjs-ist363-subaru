import { Fragment } from 'react';
// import { Header } from './Header'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout =  ({ children }) => {
    return <Fragment>
    <Header />
    <main>
    {children}
    </main>
    <Footer />
    </Fragment>
}
export default Layout;