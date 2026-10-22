//Part 1

function calculateArea(width, height) {
    const area = width * height
    console.log(`Area Part 1: ${area}`);
    return area;
}
calculateArea(2, 3);


//Part 2

const area = function (width, height) {
    const result = width * height;
    console.log(`Area Part 2: ${result}`);
    return result;
};

area(3, 4);


//Part 3

const area3 = (width, height) => width * height
const result = area3(4, 5);
console.log(`Area Part 3: ${result}`);

area3(4, 5);