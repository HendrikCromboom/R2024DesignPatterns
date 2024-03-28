class Iterator2{
    iterate(start: number, stop: number, increment: number){
        return{
            [Symbol.iterator](){
                return this
            }, next(){
                if(start < stop){
                    start += increment
                    return {value: start, done: false}
                } 
                return {value: stop, done: true}
            }
        }
    }
}