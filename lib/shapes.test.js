const { Circle, Triangle, Square } = require("./shapes")

// test for circle to be proper shape
describe('Circle', () => {
    it('should have the properties of a circle', () => {
        const realCircle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="105" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">AAA</text></svg>`;
        const newCircle = new Circle("red", "AAA", "black").render();
        expect(newCircle).toEqual(realCircle);
    })
});

describe('Triangle', () => {
    it('should have the properties of a triangle', () => {
    const realTriangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="30, 150 280, 150 150, 5 " fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">AAA</text></svg>`;
    const newTriangle = new Triangle("red", "AAA", "black").render();
    expect(newTriangle).toEqual(realTriangle);
    })
});

describe('Square', () => {
    it('should have the properties of a square', () => {
    const realSquare = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="150" height="150" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">AAA</text></svg>`;
    const newSquare = new Square("red", "AAA", "black").render();
    expect(newSquare).toEqual(realSquare);
    })
});