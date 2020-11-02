const express = require("express");
const router = express.Router();
const knex = require("../database");
const { json } = require("body-parser");

//http://localhost:3000/api/meals
//1.returns all meals
router.get("/", async (request, response) => {
  try {
    if (Object.keys(request.query).length === 0) {
      await knex("meal")
        .select("id", "title", "location", "price", "max_reservations", "when")
        .then((data) => response.json(data));
    } else if (request.query.maxPrice) {
      //6. Get meals that has a price smaller than maxPrice
      await knex("meal")
        .select("title", "price")
        .where("price", "<", request.query.maxPrice)
        .then((data) => response.json(data));
    } else if (request.query.availableReservations) {
      //7.Get meals that still has available reservations
      /* select meal.id,meal.title,meal.max_reservations as Max,
      sum(number_of_guests) as reserved, meal.max_reservations-sum(number_of_guests) as available from meal
      inner join reservation on meal.id =reservation.meal_id
      group by meal.id
      having meal.max_reservations > sum(number_of_guests) */

      await knex("meal")
        .select(
          "meal.id",
          "meal.title",
          "meal.max_reservations",
          knex.raw("sum(number_of_guests)")
        )
        .innerJoin("reservation", "meal.id", "reservation.meal_id")
        .groupBy("meal.id")
        .having("meal.id", "=", request.query.id)
        .then((data) => response.json(data));
    } else if (request.query.title) {
      //8. Get meals that partially match a title.
      await knex("meal")
        .select("title", "price")
        .where("title", "like", request.query.title)
        .then((data) => response.json(data));
    } else if (request.query.createdAfter) {
      //9.Get meals that has been created after the date
      await knex("meal")
        .select("title", "price")
        .where("created_date", ">", request.query.createdAfter)
        .then((data) => response.json(data));
    } else if (request.query.limit) {
      //10.Only specific number of meals
      await knex("meal")
        .select("title", "price")
        .limit(request.query.limit)
        .then((data) => response.json(data));
    }
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

// 2.adds a new meal
router.post("/", async (request, response) => {
  try {
    // to insert data

    await knex("meal")
      .insert({
        title: request.body.title,
        description: request.body.description,
        location: request.body.location,
        when: request.body.when,
        max_reservations: request.body.max_reservations,
        price: request.body.price,
        created_date: request.body.created_date,
      })
      .then(() => response.send("record inserted"));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

//3.returns a meal id
router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("meal")
      .select("title", "location", "price", "when")
      .where({ id: request.params.id });
    response.json(titles);
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

//4.Updates the meal by id
router.put("/:id", async (request, response) => {
  try {
    console.log(request.body.title);
    await knex("meal")
      .where({ id: request.params.id })
      .update({ title: request.body.title }, ["id", request.params.id]);
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

// 5. Deletes the meal by id
router.delete("/:id", async (request, response) => {
  try {
    await knex("meal")
      .where({ id: request.params.id })
      .del()
      .then((data) => response.send("record deleted"));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

module.exports = router;
