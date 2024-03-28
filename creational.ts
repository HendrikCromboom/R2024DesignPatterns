class Creational{
    /*
    SINGLETON
    */
    singleton: Singleton;
    singetonOption2: Singleton;
    /*
    FACTORY
    */
    factory: Factory = new Factory;
    realFactory: ProbablyNotFakeFactory;
    /*
    BUILDER
    */
    builder: Builder = new Builder;
    /*
    PROTOTYPE
    */
    prototype: Prototype;
    clone: Prototype;
    public constructor(){
        /*
        SINGLETON
        */
        this.singleton = Singleton.getInstanceOfSingleton();
        this.singetonOption2 = instance;
        /*
        FACTORY
        */
        this.realFactory = this.factory.createNewFactory(FactoryType.RealestFactory);
        /*
        BUILDER
        */
        this.builder.addBlock1("I dont favor this patern").addBlock2(4).addBlock3(true);
        /*
        PROTOTYPE
        */
        this.clone = clone;
        this.clone.whoAmI();
    }
}