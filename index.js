// Define the Polygon class
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    // Getter for perimeter
    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0);
    }

    // Getter for countSides
    get countSides() {
        return this.sides.length;
    }
}

// Define the Triangle class that extends Polygon
class Triangle extends Polygon {
    constructor(side1, side2, side3) {
        super([side1, side2, side3]);
    }

    // Method to check for a valid triangle
    isValid() {
        const [a, b, c] = this.sides.sort((a, b) => a - b); // Sorting sides for better comparison
        return a + b > c;
    }
}

// Define the Square class that extends Polygon
class Square extends Polygon {
    constructor(side) {
        super([side, side, side, side]);
    }

    // Method to calculate the area
    get area() {
        return this.sides[0] ** 2;
    }
}

// Ensure the classes are available globally or in the scope where the tests are running
// For example, you can define them in the same file as your tests or export/import them if needed

// Example usage in a test file:
beforeEach(() => {
    // Create instances of the classes for testing
    polygon = new Polygon([3, 4, 5]);
    triangle = new Triangle(3, 4, 5);
    square = new Square(5);
});

// Rest of your tests...

// Sample test cases
describe('Triangle', () => {
    it('checks for valid triangle', () => {
        assert.strictEqual(triangle.isValid(), true);
    });

    it('has a perimeter getter inherited from Polygon', () => {
        assert.strictEqual(triangle.perimeter, 12);
    });
});

describe('Square', () => {
    it('has a perimeter getter inherited from Polygon', () => {
        assert.strictEqual(square.perimeter, 20);
    });

    it('calculates the area', () => {
        assert.strictEqual(square.area, 25);
    });

    it('checks for valid square', () => {
        assert.strictEqual(square.isValid(), true);
    });
});








