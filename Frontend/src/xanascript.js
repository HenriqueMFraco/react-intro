import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}


function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ background: isDark ? '#333' : '#FFF', color: isDark ? '#FFF' : '#000' }}>
      <p>Tema {isDark ? 'Escuro' : 'Claro'}</p>
      <button onClick={() => setIsDark(!isDark)}>Alternar Tema</button>
    </div>
  );
}

function FilterList() {
  const [query, setQuery] = useState('');
  const items = ['React', 'Angular', 'Vue', 'Svelte'];

  const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filtrar" />
      <ul>
        {filteredItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Carregando...</p> : <ul>{data.map(item => <li key={item.id}>{item.title}</li>)}</ul>}
    </div>
  );
}

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTime(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <p>Tempo: {time} s</p>
      <button onClick={() => setRunning(!running)}>{running ? 'Parar' : 'Iniciar'}</button>
      <button onClick={() => setTime(0)}>Resetar</button>
    </div>
  );
}

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <p>Conteúdo do Accordion</p>}
    </div>
  );
}

function ClickCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`O botão foi clicado ${count} vezes`);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Clique {count}</button>
  );
}

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      {isOpen && (
        <div className="modal">
          <p>Este é um modal!</p>
          <button onClick={() => setIsOpen(false)}>Fechar</button>
        </div>
      )}
    </div>
  );
}

function ControlledForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <p>Nome: {formData.name}, Email: {formData.email}</p>
    </form>
  );
}

function EventListenerComponent() {
  useEffect(() => {
    const onResize = () => console.log('Resized');
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <div>Redimensione a janela para ver o console.</div>;
}

function DataFetcherById({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(setData);
  }, [id]);

  return <div>{data ? data.title : 'Carregando...'}</div>;
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Adicionar</button>
      <ul>{todos.map((todo, index) => <li key={index}>{todo}</li>)}</ul>
    </div>
  );
}