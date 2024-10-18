import { useState } from 'react';

export default function SENAI() {
  const [text, setText] = useState('');
  const [campo, setCampo] = useState(''); 

  function handleChange(e) {
    const valor = e.target.value;
    setCampo(valor); 
    if (valor === 'SENAI') {
      setText('Apareci!'); 
    } else {
      setText(''); 
    }
  }

  return (
    <>
      <input value={campo} onChange={handleChange} />
      <div>{text}</div>
    </>
  );
}


