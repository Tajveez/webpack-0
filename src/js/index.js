require("../css/styles.css");

let people = require("./people.js");
let $ = require("jquery");

console.log("hello from webpack");
for (p of people) {
  //   console.log(p.name);
  $("body").append("<h1> Username: " + p.name + "</h1>");
}
