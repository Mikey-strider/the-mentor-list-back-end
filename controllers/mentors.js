const UserModel = require('../models/user');
const express = require('express');
const Mentor = require('../models/mentor');




async function profile(req, res) {
  try {
    // find the user by their id!
    const userDoc = await UserModel.findById(req.params.userId);
    // if not user doc is found thrown an error
    if (!userDoc) {
      res.status(404).send();
      throw new Error("Profile not found.");
    }

	// send back the user
	res.json({userDoc})

  } catch (err) {
    console.log(err);
    if (res.statusCode === 404) {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
}

async function createMentor(req, res) {
  try {
    console.log(req.body)
    const createdMentor = await Mentor.create(req.body);
    console.log(createdMentor, '--- created mentor');
    res.status(201).json(createdMentor);
  } catch (err) {
    console.log(err)
    res.status(500).send();
    // throw new Error('Could not create, error!');
  }
}

async function indexMentors(req, res){
  try {
    const indexedMentors = await Mentor.find({});
    console.log(indexedMentors);
    res.status(200).json(indexedMentors);
  } catch (err) {
    console.log(err);
    console.log('Did not find your index list');
    res.status(500).send();
  }
}

async function getMentor(req, res) {
  try {
    const findAMentor = await Mentor.findById(req.params.id);
    console.log(findAMentor);
    res.status(200).json(findAMentor);
  } catch (err) {
    res.status(404).send();
  }
}

async function editMentor(req, res) {
  try {
    await Mentor.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
}

async function deleteMentor(req, res) {
  try {
    await Mentor.findByIdAndDelete(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(404).send();
  }
  
}

module.exports = {
  profile,
  createMentor,
  indexMentors,
  getMentor,
  editMentor,
  deleteMentor,
};