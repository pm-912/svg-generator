const shapes = require("./lib/shapes.js");
const inquirer = require("inquirer");

const questions = [
    {
        message:"Please enter three characters that you'd like to display.",
        type: "input",
        name: "chars"
    },
    {
        message:"What color would you like those characters to be? You can enter a color code or hex code.",
        type: "input",
        name: "textcolor"
    },
    {
        message:"What shape would you like the text to appear on top of?",
        type: "list",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        message:"What color would you like the shape to be?",
        type: "input",
        name: "shapecolor"
    },
]

function init(questionArray) {
    inquirer.prompt(questionArray)
        .then((responses) => {
            console.log(responses)
//             fs.writeFileSync("logo.svg", //content of file,
//              (err) =>
//                 err ? console.error(err) : console.log('Success!'))
})
        .catch ((error) => {
    console.error(error)
})
}

init(questions);