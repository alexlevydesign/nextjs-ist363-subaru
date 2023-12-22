import styles from './socialnav.module.scss'

import Image from 'next/image';



const SocialNav = () => {
    return <nav className={styles.socialnav}>
        <a href='https://www.facebook.com/subaruofamerica/'>
        <Image
            src={`/images/icons/social-icons/facebook.svg`}
            alt={`Facebook icon`}
            width={32}
            height={32}
        />
        </a>
        <a href='https://twitter.com/subaru_usa?lang=en'>
        <Image
            src={`/images/icons/social-icons/twitter.svg`}
            alt={`Twitter icon`}
            width={32}
            height={32}
        />
        </a>
        <a href='https://www.instagram.com/subaru_usa/?hl=en'>
        <Image
            src={`/images/icons/social-icons/instagram.svg`}
            alt={`Instagram icon`}
            width={32}
            height={32}
        />
        </a>
        <a href='https://www.youtube.com/user/subaru'>
        <Image
            src={`/images/icons/social-icons/youtube.svg`}
            alt={`Youtube icon`}
            width={32}
            height={32}
        />
        </a>
        
    </nav>
}
export default SocialNav;