exports.messureTime = (sortingFunction, arrayToSort) => {

    let arr = JSON.parse(JSON.stringify(arrayToSort))

    let nanoSec = 0;

    const startTime = process.hrtime();
    sortingFunction(arr, 0, arr.length)
    const totalTime = process.hrtime(startTime);
    
    nanoSec = totalTime[1];

    return nanoSec
}