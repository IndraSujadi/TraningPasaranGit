// @flow

function sayHello(name) {
    return `Hello, ${name}`;
}

function doSomething () {
    let result = sayHello('indra');
    console.log(result);
}

doSomething();