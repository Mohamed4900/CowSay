const userInfo = require('./information');
const cowsay = require('./node_modules/cowsay')

console.log(cowsay.say({
    text: 'Hello Wilders !!!'
}));

console.log(`Hello, my name is ${userInfo.firstName} ${userInfo.lastName} and my school is ${userInfo.school} `);