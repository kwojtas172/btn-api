const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json({
      'name': 'Kamil',
      'description': 'Jestem programistą z ponad rocznym doświadczeniem, szukam okazji do powiększenia swojego komercyjnego doświadczenia',
      'skills': ['JavaScript (ECMA6)', 'React.js', 'HTML5', 'SCSS/CSS (Sass)', 'Node.js (Express.js)', 'MongoDB'],
      'email': 'k.wojtas172@gmail.com',
      'linkedin': 'https://www.linkedin.com/in/kamil-wojtas/',
      'repo': 'https://github.com/kwojtas172/button-devutnia'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})