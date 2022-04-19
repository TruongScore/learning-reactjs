import React, { useState } from "react";

ColorBox.propTypes = {};

function ColorBox(props) {
    const [color, setColor] = useState('pink');

    return (
        <div>
            {color}

            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('pink')}>Change to pink</button>
        </div>
    )
}

export default ColorBox;