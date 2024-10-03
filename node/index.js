const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;
let carList = [];

app.get('/', (req, res) => {
  res.send("Bem-vindo! Links para movimentação:\n" +
           "--get-- /visu - para visualizar todos os veículos;\n" +
           "--get-- /visu/:id - para visualizar veículo específico;\n" +
           "--post-- /add - para adicionar um veículo;\n" +
           "--delete-- /re/:id - para remover um veículo pelo ID;\n" +
           "--put-- /upt/:id - para atualizar um veículo pelo ID;\n" +
           "--put-- /upt/:id/:campo - para atualizar um campo específico de um veículo pelo ID;\n");
});

app.get('/visu', (req, res) => {
  res.send(carList);
});

app.get('/visu/:id', (req, res) => {
  const { id } = req.params;
  const car = carList.find(car => car.id === parseInt(id));

  if (car) {
    res.send(car);
  } else {
    res.status(404).send("Carro não encontrado.");
  }
});

app.post('/add', (req, res) => {
  const { marca, modelo, ano, prop, cor } = req.body;
  const newCar = { id: carList.length + 1, marca, modelo, ano, prop, cor };
  carList.push(newCar);
  res.status(201).send(`Carro recebido: ${marca}, ${modelo}, ${ano}, ${prop}, ${cor}`);
});

app.put('/upt/:id', (req, res) => {
  const { id } = req.params;
  const index = carList.findIndex(car => car.id === parseInt(id));

  if (index !== -1) {
    const { marca, modelo, ano, prop, cor } = req.body;
    carList[index] = { id: parseInt(id), marca, modelo, ano, prop, cor };
    res.send(`Carro atualizado: ${marca}, ${modelo}, ${ano}, ${prop}, ${cor}`);
  } else {
    res.status(404).send("Carro não encontrado.");
  }
});

app.put('/upt/:id/:campo', (req, res) => {
  const { id, campo } = req.params;
  const index = carList.findIndex(car => car.id === parseInt(id));

  if (index !== -1) {
    if (req.body[campo]) {
      carList[index][campo] = req.body[campo];
      res.send(`Campo ${campo} do carro atualizado para: ${req.body[campo]}`);
    } else {
      res.status(400).send("Campo inválido ou não fornecido.");
    }
  } else {
    res.status(404).send("Carro não encontrado.");
  }
});

app.delete('/re/:id', (req, res) => {
  const { id } = req.params;
  const index = carList.findIndex(car => car.id === parseInt(id));

  if (index !== -1) {
    const removedCar = carList.splice(index, 1)[0];
    res.send(`Carro ${removedCar.marca} removido.`);
  } else {
    res.status(404).send("Carro não encontrado.");
  }
});

const deleteByField = (req, res, field) => {
  const value = req.params[field];
  const initialLength = carList.length;
  carList = carList.filter(car => car[field] !== value);

  if (carList.length < initialLength) {
    res.send(`Veículos com ${field} ${value} removidos.`);
  } else {
    res.status(404).send(`Nenhum veículo encontrado com esse ${field}.`);
  }
};

app.delete('/re/:id/:marca', (req, res) => deleteByField(req, res, 'marca'));
app.delete('/re/:id/:ano', (req, res) => deleteByField(req, res, 'ano'));
app.delete('/re/:id/:prop', (req, res) => deleteByField(req, res, 'prop'));
app.delete('/re/:id/:cor', (req, res) => deleteByField(req, res, 'cor'));

app.listen(port, () => {
  console.log(`API de veículos ouvindo na porta ${port}`);
});
