import { useState } from 'react';

export default function Cont() {
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