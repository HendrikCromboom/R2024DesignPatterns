//I personally find prototypes to turn your beautiful lasagna into instant spagetti alarmingly fast, unless you are building a framework/engine OR use it for very simple const, steer away
class Prototype{
    value: string = "I am the first one";
    whoAmI(){
        return this.value;
    }
}
const protoType = new Prototype();
const clone: Prototype = Object.create(protoType, {value: {value : "That makes me the clone"}})
//This is probably not the best way to use prototypes, generaly I use them with const exclusively and the general way I handled this excercise was with classes and OOP in mind. For me in theory extending a class could be a form of prototyping, but in JS the __prototype__ functionalities are more descriptive and less bound to declared classes. TODO: Revise with documentation after doing this excercise.
