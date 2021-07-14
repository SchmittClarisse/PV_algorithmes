//Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const list = [10, 15, 3, 7]
const k = 17

class FirstExo{
    constructor(list,k){
        this.list = list
        this.k = k 
        this.programm()
    }
    programm(){
        let result = false
        for(let i = 0; i < this.list.length; i++){
        for(let j = 1; j < this.list.length; j++){
            if (this.list[i] + this.list[j] === this.k){
            return console.log(result = true)}
        }
    }
    return console.log(result)
}
}
new FirstExo(list, k)