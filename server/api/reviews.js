const express = require("express");
const router = express.Router();
const knex = require("../database");

//http://localhost:3000/api/reviews/
//1.returns all reviews
router.get("/", async (request, response) => {
  try {
    await knex("review")
      .select("meal_id", "stars", "title")
      .then((data) => response.json(data));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

// 2.	Adds a new review
router.post("/", async (request, response) => {
  try {
    // to insert data
    await knex("review")
      .insert({
        title: request.body.comments,
        stars: request.body.rating,
        created_date: request.body.created_date,
        meal_id: request.body.meal_id,
      })
      .then(() => response.send("record inserted"));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

//3.Returns review by id
router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("review")
      .select("meal_id", "stars", "title")
      .where({ id: request.params.id });
    response.json(titles);
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

//4.Updates the review by id
router.put("/:id", async (request, response) => {
  try {
    await knex("review")
      .where({ id: request.params.id })
      .update({ stars: request.body.stars }, ["id", request.params.id]);
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

// 5. Deletes the review by id
router.delete("/:id", async (request, response) => {
  try {
    await knex("review")
      .where({ id: request.params.id })
      .del()
      .then((data) => response.send("record deleted"));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

module.exports = router;
