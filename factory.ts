//To anyone who reads this, im sorry about the snowwhite reference
class Factory{
    createNewFactory(factoryType: FactoryType): ProbablyNotFakeFactory{
        return factoryType == FactoryType.RealFactory ? new RealFactory : new RealestFactory;
    }
}
interface ProbablyNotFakeFactory{
 whoIsTheRealestFactoryInTheLand(): string;
}
class RealFactory implements ProbablyNotFakeFactory{
    whoIsTheRealestFactoryInTheLand = () => "Its me, the real one";
}
class RealestFactory implements ProbablyNotFakeFactory{
    whoIsTheRealestFactoryInTheLand = () => "Its me, the realest";
}
//Anyone who does factories with string parameters should  explain themself in front of a court
enum FactoryType{
    RealFactory,
    RealestFactory
}