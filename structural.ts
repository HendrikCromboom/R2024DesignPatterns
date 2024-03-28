class Structural{
    /*
    PROXY
    */
    proxy2: Proxy2 = new Proxy2;
    proxy2Handler: Proxy2Handler = new Proxy2Handler; 
    /*
    FACADE
    */
    facade: Facade = new Facade;
    facadeResult: number;

    public constructor(){
        /*
        PROXY
        */
        const proxy = new Proxy(this.proxy2.whoAmI(), this.proxy2Handler);
        proxy();
        /*
        FACADE
        */
        this.facade.turnOnFacade();
        this.facadeResult = this.facade.turnOffFacade();
    }
}