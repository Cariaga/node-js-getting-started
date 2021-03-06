const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const PokerHand = require('poker-hand-evaluator');
const myPokerHand = new PokerHand('KS KH QC AH AD');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(myPokerHand.describe()))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//.get('/', (req, res) => res.send('pages/index'))
