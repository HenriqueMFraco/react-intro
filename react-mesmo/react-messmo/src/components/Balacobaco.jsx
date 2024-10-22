import { useState } from 'react';

export default function Balacobaco() {
    const [text, setText] = useState('Balacobaco');
  
    return (
      <>
      <div>{text}</div>
        <button onClick={() => setText('Balacobaco')}>
          Apareça!!!
        </button>
        <button onClick={() => setText('')}>
          Suma Carniça!!
        </button>
      </>
    );
  }
  