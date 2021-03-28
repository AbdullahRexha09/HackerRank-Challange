var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminders');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});
router.post('/reminders', async (req,res) =>{
  console.log('qyty')
const reminder = new Reminder({
  id: req.body.id,
  user: req.body.user,
  description: req.body.description,
  date: req.body.date
});
try{
  const r1 = await reminder.save(reminder);
  res.status(201);
  res.send('Ok');
}
catch(err){
  res.send(err);
}

})
router.get('/reminders',async (req, res) =>{
  try{
    const reminders = await Reminder.findAll();
    res.json(reminders);
  }
  catch(err){
    res.send('Error: ' + err);
  }
})
router.delete('/reminders',async (req, res) =>{
  try{
    res.status(405);
    res.send('Method not allowed');
  }
  catch(err){
    res.send('Error: ' + err);
  }
})

module.exports = router;
