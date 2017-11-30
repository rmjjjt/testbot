const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.status(200).send('Don\'t make me go Full Jenkins on you');
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
});

app.post('/hello', function(req, res, next) {
  if (req.body.token === 'sjer2gTuEHNBkoPtUoekgv5w') {
    let userName = req.body.user_name;
    let botPayload = {
      text: `Hey ${userName}, whasssssuuuuuuuup?`
    };

    let rhymesPayload = {
      text: `Hey ${userName}, you're doing some good stuff today baby. Keep on keepin' on.`
    };

    if (userName !== 'slackbot') {
      return res.status(200).json(botPayload);
    } else if (userName === 'rhymes') {
      return res.status(200).json(rhymesPayload);
    }else {
      return res.status(200).end();
    }
  }
});