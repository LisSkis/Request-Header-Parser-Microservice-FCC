// server.js
// where your node app starts

// init project
const os = require('os');
var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/whoami', (req, res) => {
  const ipHeader = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const ipaddress = ipHeader.slice(0, ipHeader.indexOf(','));
  const languageHeader = req.headers["accept-language"];
  const language = languageHeader.slice(0, languageHeader.indexOf(','));
  const userAgent = req.headers["user-agent"];
  const software = userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
  res.send({
    ipaddress,
    language,
    software,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
