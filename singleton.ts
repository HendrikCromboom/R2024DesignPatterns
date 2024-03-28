//Since JS has global const that can only be instantiated once it sufices as a singleton pattern, depending on who you ask it is the prefered usage over a locking object. Added both as an example since some languages just dont have access to it and some architects just dont like the look of it.
//Example with const
const instance: Singleton = {value : "I am a singleton, trust me bro" };
//Example with an object that can only be instantiated once
class Singleton{
    static instance: Singleton;
    value: string;
    private constructor(){
        this.value = "I am a singleton, trust me bro"
    }
    static getInstanceOfSingleton(): Singleton{
        !Singleton.instance ? Singleton.instance = new Singleton : null;
        return Singleton.instance;
    }
}

//Note: For me it honestly depends on the usage, if it entails a small object or one parameter I will often use a const. But if we are talking about half an engine lets say, I prefer the readability of an oldfashioned fully typed and declared class for readability.