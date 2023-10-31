import { useState } from 'react';

import Swatches from './Swatches';

const colors = [
    "red", "orange", "yellow"
];


const CarColorPicker = () => {
    const [activeColor, setActiveColor] = useState("red"); // [state variable, set state function]
    return <section>
        <div style={{ backgroundColor : activeColor}}>Large car image goes here</div>
        <Swatches data={colors} 
        changeHandler={setActiveColor} />
        <ul>
            {colors.map((color) => {
                return <li>{color}</li>
            })}
        </ul>
        <h2>{activeColor}</h2>
    </section>
}
export default CarColorPicker