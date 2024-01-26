// This page contains my superclass Shape, and its subclasses Circle,
// Triangle, and Square. Then it exports those three subclasses.
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor
    }
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="105" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="30, 30 280, 30 150, 200" fill="${this.shapeColor}"/><text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = { Circle, Triangle, Square };