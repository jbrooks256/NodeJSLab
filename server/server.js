const path = require("path");

const fs = require("fs");

let chirps = [{
    name: "Justin",
    message: "Hey"
}, {
    name: "Dre",
    message: "Very Good"
}, {
    name: "Zell",
    message: "Ahhh"
}, {
    name: "Shawn",
    message: "Motorcycle"
}, {
    name: "Darron",
    message: "I'm Bored"
}];

const chirpsData = JSON.stringify(chirps);
fs.writeFile("./chirps.json", chirpsData, () => console.log("done"));

fs.readFile("./chirps.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});