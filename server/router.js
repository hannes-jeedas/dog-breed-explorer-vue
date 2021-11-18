const express = require("express");
const router = express.Router();


//let movieData = require('./moviedata.json');
router.get("/get-breeds", function (breeds_request, breeds_response) {
  const breeds = require('./breeds.json');

  breeds_response.send(breeds);
});

router.get("/calc", function (req, res) {
  const a = 4;
  const b = 4;
  const result = a + b;
  // res.send({ result }); // Objekt
  res.send(String(result)); // String
});
// request === req ja response === res

router.get("/get-todos", function (request, response) {
  const exampleTodos = [
    {
      title: "Vii prügi välja",
      status: "ACTIVE",
    },
    {
      title: "Tee midagi",
      status: "ACTIVE",
    },
    {
      title: "Käi poes",
      status: "COMPLETE",
    },
  ];

  response.send(exampleTodos);
});

module.exports = router;
