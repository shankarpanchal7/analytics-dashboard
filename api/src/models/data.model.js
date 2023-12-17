const {Schema, model} = require("../db")
const bcrypt = require("bcryptjs")
const ViewsSchema = new Schema({
    day: {type: Date, default: new Date()},
    age: {type: String, default: ""},
    gender: {type: String, default: ""},
    a: {type: String, default: ""},
    b: {type: String, default: ""},
    c: {type: String, default: ""},
    d: {type: String, default: ""},
    e: {type: String, default: ""},
    f: {type: String, default: ""},
})



const Views = model("views", ViewsSchema)

module.exports = Views