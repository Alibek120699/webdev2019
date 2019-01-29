let esFivePercentageSupport = 95.38;
let esSixTemplateLiterals = 88.67;

// to convert ES6 js code to ES5
// 1) instead of let and const we use only 'var' keyword in ES5
var pasta = 'Spaghetti';
var meat = 'Pancetta';
var sauce = 'Eggs and cheese';

// 2) instead of such interpolation of ES6, in ES5 we use (+) to interpolate variables into strings
// In ES6: var carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
/*In ES5:*/ var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", " + " and a sauce made with " + sauce + ".";

// npm - node package manager
/* commands:
    1) npm install babel-cli -D
    -- babel-cli package includes Babel tools
    2) npm install babel-preset-env -D
    -- babel-preset-env package has code that maps ES6(+) to ES5
    -- D - devDependencies property
*/ 

// build in json file:
/*scrips{
    "build": "babel src -d lib" // after this we can transpile our code using "npm run build" command
}*/