function swap(arr, xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

const bubbleSort = (arr, n) => {
  var i, j;
  for (i = 0; i < n-1; i++)
      for (j = 0; j < n-i-1; j++)
          if (arr[j] > arr[j+1])
            swap(arr,j,j+1);
}

exports.sort = (arr, low, high) => {
  bubbleSort(arr, arr.length);
}