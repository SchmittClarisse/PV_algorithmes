// Merge sort algorithm

class Sorter {
    constructor(array){
        this.array = array;
        this.sortMethod(this.array, 0, this.array.length-1);
    }

    sortMethod(arr, l, r){
        if (l >= r) {
            return;
        }
        let middle = l + parseInt((r-l) / 2);
        this.sortMethod(arr, l, middle);
        this.sortMethod(arr, middle + 1, r);
        this.merge(arr, l, middle, r);
    }

    merge(arr, l, m, r){

        // Find size of the subarrays to merge
        const n1 = m - l + 1;
        const n2 = r - m;

        // Create tmp arrays
        let arrL = [];
        let arrR = [];

        // Populate tmp arrays
        for (let i = 0; i < n1; i++){
            arrL[i] = arr[l + i];
        }
        for (let j = 0; j < n2; j++){
            arrR[j] = arr[m + 1 + j];
        }

        // Initial indexes of subarrays
        let i = 0;
        let j = 0;

        // Initial index of merge subarray
        let k = l;
        while (i < n1 && j < n2){
            if (arrL[i] <= arrR[j]){
                arr[k] = arrL[i];
                i++;
            } else {
                arr[k] = arrR[j];
                j++;
            }
            k++;
        }

        // Copy remaining elements in subarrays if any
        while (i < n1) {
            arr[k] = arrL[i];
            i++;
            k++;
        }
        while (j < n2) {
            arr[k] = arrL[j];
            j++;
            k++;
        }
    }
}

module.exports = Sorter;