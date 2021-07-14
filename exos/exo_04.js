//Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
const array = [3, 7, 8, 10, 3, 6, 1];

class Building {
  constructor(array) {
    this.array = array;
    this.buildingCount = 0;
    this.count = 0;
    this.program(this.array);
  }

  program(array, n = 0) {
    let tmp = true;
    for (let i = n + 1; i < array.length; i++) {
      this.count++;
      if (array[n] < array[i]) {
        tmp = false;
      }
    }
    if (tmp) {
      this.buildingCount++;
    }
    if (n >= array.length - 1) {
      return console.log(
        `${this.buildingCount} d'immeubles peuvent voir le coucher du soleil. Il y a eu : ${this.count} comparaisons/tours`      );
    } else {
      return this.program(array, n + 1);
    }
  }
}

new Building(array);