const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('build'))

morgan.token('type', function (req, res) { return JSON.stringify(req.body) }
)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'));

let phoneBook = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

app.get('/api/persons', (req, res) => {
  res.json(phoneBook);
})

const info = `<p> Phone book has info for ${phoneBook.length} people </p>
${new Date()}`;

app.get('/info', (req, res) => {
  res.send(info);
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = phoneBook.find(person => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  phoneBook = phoneBook.filter(phoneBook => phoneBook.id !== id);

  res.status(204).end();
})

app.post('/api/persons', (req, res) => {
  const max = 100000
  const person = req.body;
  console.log(person)
  person.id = Math.floor(Math.random() * max);
  console.log(person);

  if (person.name === "" || person.number === "") {
    res.status(406).send({ error: 'Name or number missing' }).end();
  } else if (phoneBook.find(element => element.name === person.name)) {
    res.status(406).send({ error: 'name must be unique' }).end();
  } else {
    phoneBook = phoneBook.concat(person);
    res.json(phoneBook);
    console.log(phoneBook);
  }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
})