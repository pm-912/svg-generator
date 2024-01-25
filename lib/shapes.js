// make shape class
class Shape {
    // all shapes will have a name, a color, and a corresponding function to create the svg plots
    //can just attach function
    constructor(name, color) {
        this.name = name;
        this.color = color;

    }
    render() {

    }
}
// make circle subclass
class Circle extends Shape {
    constructor(name, color) {
        super( name, color)
    }
    render() {
        return `<circle cx="50" cy="50" r="40"/>`;
    }
    
}
// make triangle subclass
class Triangle extends Shape {
    constructor(name, color) {
        super(name, color)
    }
    render() {
        return `<polygon "20, 80 80, 80 50, 20 "/>`;
    }
}
// make square subclass
class Square extends Shape {
    constructor(name, color) {
        super(name, color)
    }
    render() {
        return `<rect x="15" y="15" width="40" height="40" />`;
    }
    // four sides equal length
}

module.exports = {Shape, Circle, Triangle, Square};