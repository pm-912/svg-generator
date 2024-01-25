const { Circle, Triangle, Square } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        message:"Please enter three characters that you'd like to display.",
        type: "input",
        name: "chars"
    },
    {
        message:"What color would you like those characters to be? Hex values are accepted.",
        type: "input",
        name: "textColor"
    },
    {
        message:"What shape would you like the background to be?",
        type: "list",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        message:"What color would you like the shape to be? Hex values are accepted",
        type: "input",
        name: "shapeColor"
    },
]

function generateSVG({ chars, textColor, shape, shapeColor}) {
    switch (shape) {
        case 'Circle':
            return new Circle(shapeColor, chars, textColor)
        case 'Triangle':
            return new Triangle(shapeColor, chars, textColor)
        case 'Square':
            return new Square(shapeColor, chars, textColor)
    }
}

function init(questionArray) {
    inquirer.prompt(questionArray)
        .then((responses) => {
            console.log(responses)
            fs.writeFileSync("./examples/logo.svg", generateSVG(responses).render(),
             (err) =>
                err ? console.error(err) : console.log('Success!'))
})
        .catch ((error) => {
    console.error(error)
})
}

init(questions);