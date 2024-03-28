class Behavioral{
    observer: Observer = new Observer;
    iterator2: Iterator2 = new Iterator2;
    loop: number;
    state: State = new State;
    public constructor(){
        this.observer.queue.addMessage("Hello", [Subscriber.Windows, Subscriber.Apple]);
        var message = this.observer.queue.nextMessage(Subscriber.Windows);
        console.log(message);
        for(this.loop of this.iterator2.iterate(0, 10, 1)){
            console.log(this.loop)
        }
        this.state.setState(StateOfState.ONE);
        console.log(this.state.functionality.doSpecialThing());
    }
}