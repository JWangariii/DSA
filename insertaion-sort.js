// shift instead of swap
// comlexity best: o(n), worst: o(n2)

// creating a new class
public class insertaionSort {
    // creating the array
    public void sort(int[] array) {
        // to iterate over arr
        for (let 1 = 0; 1 < array.length; 1++) {
            // storing our current arr in this variable
            const current = array[i];
            // a new loop to look at current items and shift them to right if >
            // i - 1 tgo start at previous item
            // loop var is j
            var j = i - 1;
            // if j is > 0 and item at j > than current shift item to right
            while (j >= 0 && array[j] > current) {
                // copy item on left to right
                array[j + 1] = array[j];
                // decrement j
                j--;
            }
            // stor current item at index of j + 1
            array[j + 1] = current;
        }
    }
}

// implementation 
function insertionSort(array) {
		for(let i = 1; i < array.length; i++) {
				let key = array[i];
				let j = i - 1;
				while (j >= 0 && array[j] > key) {
						array[j + 1] = array[j];
						j = j - 1;
				}
				array[j + 1] = key;
		}
		return array;
}