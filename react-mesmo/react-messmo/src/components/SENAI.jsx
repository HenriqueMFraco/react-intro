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
      <h1>Escreva e faça aparecer o texto escondido</h1>
      <input value={campo} onChange={handleChange} />
      <div>{text}</div>
    </>
  );
}


