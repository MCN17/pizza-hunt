const { Schema, model } = require("mongoose");

 const PizzaSchema = new Schema ({

    pizzaName: {
        type: String
    },
    
    createdBy: {
        type: String
    },

    createdAt: {
        type: Date, 
        default: Date.now
    },

    size: {
        type: String, 
        default: "Large"
    },
    
    toppings: []
 });

 // craete the Pizza model using the PizzaSchema
 const Pizza = model("Pizza", PizzaSchema);

 module.exports = Pizza;