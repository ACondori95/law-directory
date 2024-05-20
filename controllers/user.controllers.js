const {response} = require("express");
const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAllUsers = async (req, res) => {
  // #swagger-tags=['Users']
  const result = await mongodb.getDatabase().db().collection("users").find();
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

const getSingleUser = async (req, res) => {
  // #swagger-tags=['Users']
  const userId = new ObjectId(req.params.userId);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("users")
    .find({_id: userId});
  result.toArray().then((users) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  });
};

const createNewUser = async (req, res) => {
  // #swagger-tags=['Users']
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    clients: req.body.clients,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("users")
    .insertOne(user);
  if (response.acknowledged) {
    res.status(204).json({message: "New user was created successfully!"});
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while creating the user");
  }
};

const updateUser = async (req, res) => {
  // #swagger-tags=['Users']
  const userId = new ObjectId(req.params.userId);
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    clients: req.body.clients,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("users")
    .replaceOne({_id: userId}, user);
  if (response.modifiedCount > 0) {
    res.status(204).json({message: "User was updated successfully."});
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while updating the user.");
  }
};

const deleteUser = async (req, res) => {
  // #swagger-tags=['Users']
  const userId = new ObjectId(req.params.userId);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection("users")
    .deleteOne({_id: userId});
  if (response.deletedCount > 0) {
    res.status(204).json({message: "User deleted successfully."});
  } else {
    res
      .status(500)
      .json(response.error || "Some error occurred while deleting the user.");
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
};
