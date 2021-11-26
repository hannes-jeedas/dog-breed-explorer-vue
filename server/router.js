const express = require("express");
const router = express.Router();
const { Jasmin } = require("./dbConnection");

router.get("/get-breeds", async function (breeds_request, breeds_response) {
  //  const breeds = require('./breeds.json');
  const result = await Jasmin.find();
  // console.log(breeds);
  breeds_response.send(result);
});

module.exports = router;
