function closestNumbers(arr){

    arr.sort((a, b) => a-b)
    let result = []

    let minDiff = arr[1] - arr[0]

    for (let i = 2; i < arr.length; i++){
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1])
    }

    for(let i = 1; i< arr.length; i ++){
        if(arr[i] - arr[i - 1 ] === minDiff){
            result.push(arr[i-1], arr[i])
        }
    }
    return result
}