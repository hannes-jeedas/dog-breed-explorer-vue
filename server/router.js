const express = require("express");
const router = express.Router();
const { Jasmin } = require("./dbConnection");

router.get("/get-breeds", async function (breeds_request, breeds_response) {
  const result = await Jasmin.find({}, { Breed: 1, Picture: 1 });
  breeds_response.send(result);
});
router.get(
  "/get-breeds-list",
  async function (breeds_request, breeds_response) {
    const result = await Jasmin.find({}, { Breed: 1 });
    breeds_response.send(result);
  }
);
router.get("/get-breed/:id", async function (request, response) {
  const result = await Jasmin.findOne({ _id: request.params.id });
  // console.log(result);
  response.send(result);
});
module.exports = router;
