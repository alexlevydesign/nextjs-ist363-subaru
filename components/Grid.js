import Heading from '../components/Heading'
import Link from 'next/link';
import styles from './grid.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion";
import Paragraph from './Paragraph';

const convertPriceToFormattedString = (price) => {
    // turn the integer 22999 into a string "22,999"
    let priceArray = price.toString().split('');

    // turn the integer into an array [2,2,9,9,9]
    for (let i = priceArray.length - 3; i > 0; i -= 3) {
        priceArray.splice(i, 0, ',');
    }
    return '$' + priceArray.join('');

    //start from the end of the array and insert a comma every three digits
}


const grid = ({items}) => {
    const sectionVariants = {
        closed: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const articleVariants = {
        closed: {
            y: 50,
            opacity: 0
        },
        open: {
            y: 0,
            opacity: 1
        }
    }
    return <motion.section
    initial="closed"
    animate="open"
    variants={sectionVariants}
     className={styles.grid}>
        { items.map((item, index) => {
            const {title, slug, vehicleInformation} = item.node;
            const {trimLevels} = vehicleInformation
            return <motion.article key={index}
            variants={articleVariants}
            className={styles.grid__item}
            >
            {trimLevels && trimLevels[0].images.thumbnail &&
            <Image
                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                alt={trimLevels[0].images.thumbnail.node.altText}
                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
             />
            }
                <Heading
                level={3}
                color="black"
                >
                {title}
                </Heading>
                {trimLevels[0].msrp &&
                    <Paragraph>
                    Starting at {convertPriceToFormattedString(trimLevels[0].msrp)}
                </Paragraph>
                
                }
                
                <Paragraph>
                <Link href={`/vehicles/${slug}`}>Learn more</Link>
                </Paragraph>
            </motion.article>
        })}
    </motion.section>
}
export default grid;