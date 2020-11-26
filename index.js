const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (_, res) => res.render('pages/index'))
  .get('/cool', (_, res) => res.send(cool()))
  .get('/times', (_, res) => res.send(showTimes()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
