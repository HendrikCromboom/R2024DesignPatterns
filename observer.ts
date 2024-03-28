class Observer{
    queue: Queue = new Queue;
}
//To show an implementation of the observer patern in a language that already supports functional programming, I have opted to show a subscription queue as an example
class Queue{
    messages: Message[] = new Array;
    nextMessage(subscriber: Subscriber): string{
        var result = "No new messages";
        for(var i = 0; i < this.messages.length; i++){
            if(this.messages[i].subscribers.indexOf(subscriber) >= 0){
                result = this.messages[i].value;
                this.messages[i].subscribers.splice(this.messages[i].subscribers.indexOf(subscriber))
                if(this.messages[i].subscribers.length<1){
                    this.messages.splice(i);
                }
                break;
            }
        }
        return result;
    }
    addMessage(value: string, subscribers: Subscriber[]){
        var message = new Message;
        message.value = value;
        message.subscribers = subscribers;
        this.messages.push(message);
    }
}
class Message{
    value: string;
    subscribers: Subscriber[];
}
//In reality these would probably be database object dynamicaly checked for validity
enum Subscriber{
    Windows,
    Apple,
    Android
}