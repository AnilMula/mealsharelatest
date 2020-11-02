const express = require("express");
const router = express.Router();
const knex = require("../database");

//http://localhost:3000/api/reservations/
//1.returns all reservations
router.get("/", async (request, response) => {
  try {
    await knex("reservation")
      .select(
        "meal_id",
        "number_of_guests",
        "contact_phonenumber",
        "contact_name"
      )
      .then((data) => response.json(data));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

// 2.	Adds a new reservation
router.post("/", async (request, response) => {
  try {
    // to insert data

    await knex("reservation")
      .insert({
        created_date: request.body.created_date,
        number_of_guests: request.body.no_of_guests,
        contact_phonenumber: request.body.phone,
        contact_name: request.body.name,
        meal_id: request.body.meal_id,
      })
      .then(() => response.send("record inserted"));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

//3.Returns reservation by id
router.get("/:id", async (request, response) => {
  try {
    const titles = await knex("reservation")
      .select(
        "meal_id",
        "number_of_guests",
        "contact_phonenumber",
        "contact_name"
      )
      .where({ id: request.params.id });
    response.json(titles);
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

//4.Updates the reservation by id
router.put("/:id", async (request, response) => {
  try {
    await knex("reservation")
      .where({ id: request.params.id })
      .update({ number_of_guests: request.body.guests }, [
        "id",
        request.params.id,
      ]);
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

// 5. Deletes the reservation by id
router.delete("/:id", async (request, response) => {
  try {
    await knex("reservation")
      .where({ id: request.params.id })
      .del()
      .then((data) => response.send("record deleted"));
  } catch (error) {
    response.status(404).send("Bad request").end();
    console.log(error);
  }
});

module.exports = router;
