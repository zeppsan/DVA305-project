const mergeSort = (array) => {
    if (array == null) {
        return;
    }

    if (array.length > 1) {
        var mid = parseInt(array.length / 2);

        var left = Array(mid).fill(0);
        for (i = 0; i < mid; i++) {
            left[i] = array[i];
        }

        var right = Array(array.length - mid).fill(0);
        for (i = mid; i < array.length; i++) {
            right[i - mid] = array[i];
        }
        mergeSort(left);
        mergeSort(right);

        var i = 0;
        var j = 0;
        var k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                array[k] = left[i];
                i++;
            } else {
                array[k] = right[j];
                j++;
            }
            k++;
        }
        while (i < left.length) {
            array[k] = left[i];
            i++;
            k++;
        }
        while (j < right.length) {
            array[k] = right[j];
            j++;
            k++;
        }
    }
}

exports.sort = (arr, low, high) => {
    mergeSort(arr);
}