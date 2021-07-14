//Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
const list = [3, 7, 8, 3, 6, 1];

class SecondExo {
    constructor(list){
        this.list          = list
        this.count         = 0
        this.buildingCount = 0
        this.program(this.list)
      }

    program(list){
        for( let i = 0; i < list.length; i++){
          let temp = true
          for(let j = i + 1; j < list.length; j++){
            this.count++
            if(list[i] < list[j]){
              temp = false
            }
          }
          if(temp){
            this.buildingCount++
          }
        }
        console.log(`Numbers of buildings can see sunset : ${this.buildingCount}. Numbers of comparisons : ${this.count}`)
    }
}
new SecondExo(list)