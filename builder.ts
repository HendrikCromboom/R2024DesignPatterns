class Builder{
    block1: string;
    block2: number;
    block3: boolean;
    public constructor(){}
    addBlock1(string: string): Builder{
        this.block1 = string;
        return this;
    }
    addBlock2(number: number): Builder{
        this.block2 = number;
        return this;
    }
    addBlock3(boolean: boolean): Builder{
        this.block3 = boolean;
        return this;
    }
}