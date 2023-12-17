const {Schema, model} = require("../db")
const { v4: uuidv4 } = require('uuid');

const ViewsSchema = new Schema({
    createdOn: {type: Date, default: new Date()},
    active: {type: String, default: false},
    filters: {type: Object, default: {}},
    _id: { type: String, default: function genUUID() {
        return uuidv4()
    }},
})



const Views = model("views", ViewsSchema)

module.exports = Views