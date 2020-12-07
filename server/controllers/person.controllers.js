const { request, response } = require("express");
const { models } = require("mongoose");
const { Person } = require("../models/person.model");

module.exports.getPerson = (request,response) => {
    Person.findOne ({_id:request.params.id})
    .then(person => response.json(person))
    .catch(err => response.json)
}

module.exports.getAllPeople = (request,response) => {
    Person.find({})
    .then(persons=> response.json(persons))
    .catch(err => response.json(err))
}

module.exports.index = (request,response) => {
    Person.find()
    .then(allDaUsers => response.json({index: allDaUsers}))
    .catch(err=> response.json({ message: "something went wrong", error:err}))
    }

module.exports.createPerson = (request,response) =>{
    const { title, price, description } = request.body;
    Person.create({
        title,
        price,
        description
    })
    .then(person => response.json(person))
    .catch(err =>response.json(err))
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

