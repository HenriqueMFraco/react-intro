const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;
const nome = "Fulano";
let personList = [];

app.get('/', (req, res) => {
  res.send(nome);
});

app.get('/visualizar', (req, res) => {
  res.send(personList);
});

app.post('/add', (req, res) => {
  const { name, age } = req.body;
  personList.push({ name, age });
  res.send(`Usuário recebido, nome: ${name}`);
});

app.post('/re/:id', (req, res) => {
  const { id } = req.params;
  const index = parseInt(id, 10); 

  if (index >= 0 && index < personList.length) {
    const removedPerson = personList.splice(index, 1)[0]; 
    res.send(`Usuário ${removedPerson.name} removido.`);
  } else {
    res.status(404).send('Usuário não encontrado.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
