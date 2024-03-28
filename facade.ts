class Facade{
    private minorSystem: MinorSystem = new MinorSystem;
    private mayorSystem: MayorSystem = new MayorSystem;
    turnOnFacade(){
        this.mayorSystem.turnOn();
        this.minorSystem.cicleSystem(40);
        this.minorSystem.reductor = 10;
    }
    turnOffFacade(): number{
        this.minorSystem.reduce();
        this.mayorSystem.turnOff();
        return this.mayorSystem.result + this.minorSystem.result;   
    }
}
class MinorSystem{
    result: number = 1;
    reductor: number;
    cicleSystem(rounds: number){
        for(var i=0; i< rounds; i++){
            this.result ++;
        }
    }
    reduce(){
        this.result =- this.reductor;
    }
}
class MayorSystem{
    result:number = 1;
    state: boolean = false;
    turnOn(){
        this.state = true;
        while(this.state){
            this.result ++
        }
    }
    turnOff = () => this.state = false;

}