import Container from './Container';
import Heading from './Heading';
import Button from './Button';
import Paragraph from './Paragraph';
import Row from './Row';

import Link from 'next/link';

import styles from './calltoaction.module.scss';

const CallToAction = () => {
    return <section className={styles.calltoaction}>
    <Container className={styles.calltoaction__container}>
        <Heading level={2} color="white">Get behind the wheel</Heading>
        <Paragraph color="white">Start customizing your Impreza today, or contact your local Subaru dealer to experience one in person.</Paragraph>
        <Row className={styles.row}>
        <Link href="/build-price" className={styles.link__primary}>
        Build & Price
                    </Link>
                    <Link href="/contact" className={styles.link__secondary}>
        Contact Dealer
                    </Link>
            
        </Row>
    </Container>
    </section>
}
export default CallToAction