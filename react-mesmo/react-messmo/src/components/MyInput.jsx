import { useState } from 'react';

export default function Inputs(){
    return(
        <>
            <Balacobaco />
            <br />
            <br />
            <br />
            <Cont />
            <br />
            <br />      
            <br />
            <br />
            <SENAI />
        </>)
}

export function SENAI(){
    const [text, setText] = useState('');
    var campo
    function handleChange(e) {
        if(campo == 'SENAI'){
        setText('Apareci!');
              }
      }
      return (
        <>
          <input value={campo} onChange={handleChange} />
          <div>{text}</div>
        </>
      );
    }

export function  Balacobaco() {
  const [text, setText] = useState('Balacobaco');

  return (
    <>
    <div>{text}</div>
      <button onClick={() => setText('Balacobaco')}>
        Apareça!!!
      </button>
      <button onClick={() => setText('Balacobaco')}>
        Suma Carniça!!
      </button>
    </>
  );
}

export function Cont() {
  const [count, setCount] = useState(0);
  function ClickMais() {
    setCount(count + 10);
  }
  function ClickMenos() {
    setCount(count - 10);
  }
  return(
    <>
    <button onClick={ClickMais}> +10 </button>
    <button onClick={ClickMenos}> -10 </button>
    <div className='contador'>{count}</div>
    </>
    );

}
