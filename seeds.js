const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose.connect("mongodb://localhost:27017/CarShop", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});

const products = [
    new Product({
        name: "Ferrari",
        price: 250000,
        category: "car",
    }),
    new Product({
        name: "Lamborghini",
        price: 300000,
        category: "car",
    }),
    new Product({
        name: "Porsche",
        price: 200000,
        category: "car",
    }),
    new Product({
        name: "Tesla Model S",
        price: 90000,
        category: "car",
    }),
    new Product({
        name: "Audi R8",
        price: 150000,
        category: "car",
    })
];

Product.insertMany(products)
.then(() => {
    console.log("Product saved successfully");
    console.log(products);
})
.catch((error) => {
    console.log("Error saving product:", error);
});