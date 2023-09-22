const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const Joi = require("joi");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "expresstut",
});

router.get("/", (req, res) => {
  const query = "SELECT * From user";
  db.query(query, (err, data) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.send(data);
  });
});

router.get("/:id", (req, res) => {
  const query = "SELECT * From user where id = ?";
  const values = req.params.id;
  db.query(query, values, (err, data) => {
    if (err) {
      return res.status(404).send(err);
    }

    if (data.length == 0) {
      return res.status(404).send("The course with the given ID was not found");
    }

    res.send(data);
  });
});

router.get("/search/:searchValue", (req, res) => {
  const query = "SELECT * From user where id LIKE ? OR user_name LIKE ? ";
  const values = [
    "%" + req.params.searchValue + "%",
    "%" + req.params.searchValue + "%",
  ];

  db.query(query, values, (err, data) => {
    if (err) {
      return res.status(404).send(err);
    }

    if (data.length == 0) {
      return res.status(404).send("404 not found");
    }

    res.send(data);
  });
});

router.post("/", (req, res) => {
  const query = "INSERT INTO user values(?)";
  const values = ["id", req.body.user_name];
  const { error } = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  db.query(query, [values], (err, data) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.send("user has been created");
  });
});

router.put("/:id", (req, res) => {
  const query = "UPDATE user set user_name = ? where id = ?";
  const value = [req.body.user_name, req.params.id];

  const { error } = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  db.query(query, value, (err, data) => {
    if (err) {
      return res.status(404).send(err);
    }

    if (data.affectedRows == 0) {
      return res.status(404).send("The course with the given ID was not found");
    }

    res.send("user has been updated");
  });
});

router.delete("/:id", (req, res) => {
  const query = "DELETE FROM user where id = ?";
  const value = req.params.id;

  db.query(query, value, (err, data) => {
    if (err) {
      return res.status(404).send(err);
    }

    if (data.affectedRows == 0) {
      return res.status(404).send("The course with the given ID was not found");
    }

    res.send("user has been deleted");
  });
});

function validateCourse(course) {
  const schema = Joi.object({
    user_name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

module.exports = router;
