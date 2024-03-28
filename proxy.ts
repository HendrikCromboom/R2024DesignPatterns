class Proxy2{
    value: string = "I am a real object";
    whoAmI = () => this.value;
}
class Proxy2Handler{
    apply(target, thisArg, args) {
        console.log("Calling" + target.name);
        return target.apply(thisArg, args);
      }
}