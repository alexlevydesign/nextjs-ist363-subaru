import Link from 'next/link';

const Header = () => {
    return <header>
    Logo<br />
    <nav>
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about">
                    About
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    </nav>
        Header goes here
    </header>
}
export default Header;