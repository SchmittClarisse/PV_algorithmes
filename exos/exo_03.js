//Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

const list = [10, 15, 3, 7];
const k = 22;

class ThirdExo {
  constructor(array, k) {
    this.array = array;
    this.k = k;
    this.count = 0;
    this.program();
  }

  program() {
    let i = 0;
    let j = this.array.length - 1;
    while (j > i) {
      this.count++;
      if (this.array[i] + this.array[j] === this.k) {
        return console.log(true + `, number of comparaisons: ${this.count}`);
      } else if (this.array[i] + this.array[j] > this.k) {
        j++;
      } else if (this.array[i] + this.array[j] < this.k) {
        i++;
      }
    }
    return console.log(false + `, number of comparaisons: ${this.count}`);
  }
}

new ThirdExo(list, k);
