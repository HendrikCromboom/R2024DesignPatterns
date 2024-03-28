class State{
    state: StateOfState;
    functionality: Functionality;
    setState(state: StateOfState){
        this.state = state;
        this.functionality = this.state ==  StateOfState.ONE ? new StateFunctionality1 : new StateFunctionality2;
    }
}
interface Functionality{
    doSpecialThing() :string;
}
class StateFunctionality1 implements Functionality{
    doSpecialThing(): string {
        return "State is 1"
    }
}
class StateFunctionality2{
    doSpecialThing(): string {
        return "State is 2"
    }
}
enum StateOfState{
    ONE,
    TWO
}