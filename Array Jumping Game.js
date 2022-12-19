function jumpGameI(inputArray){
    var totalDistance = 0;
    for(var i = 0; i < inputArray.length; i+0){
        var currentIndex = i;
        var maxIndex = inputArray[i]+i+1;
        var possibleLandings = inputArray.slice(i+1, maxIndex);
        if(possibleLandings.length < inputArray[i]){
            solution = 1; 
            return solution
        }
        var maxDistance = Math.max(...possibleLandings);
        var locationOfMax = inputArray.indexOf(maxDistance, possibleLandings-1)
        i = inputArray.indexOf(maxDistance, possibleLandings-1)
        if(maxDistance == Number.NEGATIVE_INFINITY){
            solution = 0;
            return solution
        }
    }
}

var inputArray = [1,0,1];
// inputArray = [0,2,1];
//var inputArray = [2,0,8,5,0,10,9,5,0,3,0,2,0,0,0,0,9];
//var inputArray = [2,0,8,5,0,10,9,5,0,3,0,2,9];
var solution = 0;
console.log(jumpGameI(inputArray))
console.log("The End")