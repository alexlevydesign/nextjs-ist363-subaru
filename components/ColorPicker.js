// core imports
import { useState } from 'react';

// custom components
import Heading from './Heading';
import Image from 'next/image';
import Swatches from './Swatches';

// styles
import styles from './colorpicker.module.scss';


const ColorPicker = ({colors}) => {
    const [activeColor, setActiveColor] = useState(0); // [state variable, set state function]

    return <section className={styles.colorpicker}>
      <Heading level={2} textAlign="center">Pick a color</Heading>
      <Image
      src={colors[activeColor].image.node.sourceUrl}
      alt={colors[activeColor].image.node.altText}
      width={colors[activeColor].image.node.mediaDetails.width}
      height={colors[activeColor].image.node.mediaDetails.height}
      className={styles.colorpicker__image}
      />
      <Swatches colors={colors} setActiveColor={setActiveColor} activeColor={activeColor}/>
      <Heading level={3} textAlign="center">{colors[activeColor].swatch.edges[0].node.name}</Heading>
    </section>
}
export default ColorPicker