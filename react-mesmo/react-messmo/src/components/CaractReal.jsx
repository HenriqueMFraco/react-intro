import React, { useState } from 'react';
import '../index.css'; 

export default function CaractReal() {
    const [text, setText] = useState('');
    
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="character-counter">
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Digite aqui..."
                rows="4"
                cols="50"
            />
            <div className="count">
                {text.length} caracteres
            </div>
        </div>
    );
}
