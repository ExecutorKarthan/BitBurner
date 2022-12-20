function jumpGameI(inputArray){
    //Create a loop to walk through each value, skipping ahead to new locations as needed
    for(var i = 0; i < inputArray.length; i+0){
        //Define the index of the farthest value that can be reached
        var maxIndex = inputArray[i]+i+1;
        //Define an array of possible values ranging from i+1 to the farthest reachable value
        var possibleLandings = inputArray.slice(i+1, maxIndex);
        //If the possible jumps exceed the length left of the array, you won and can return 1
        if(possibleLandings.length < inputArray[i]){
            solution = 1; 
            return solution
        }
        //Determine the max distance for the next jump, then set i to the max distance's corresponding index
        var maxDistance = Math.max(...possibleLandings);
        i = inputArray.indexOf(maxDistance, i)
        //If your max distance is 0 (cannot jump) or is negative infinity, then you cannot jump and therefore return 0
        if(maxDistance == 0 || maxDistance == Number.NEGATIVE_INFINITY){
            solution = 0;
            return solution
        }
    }
}

//Create the solution variable and set it to a default of 0
var solution = 0;
var inputArray0 = [2,0,8,5,0,10,9,5,0,3,0,2,0,5,0,0,9];
var inputArray1 = [1,0,1];
var inputArray2 = [0,2,1];
var inputArray3 = [2,0,8,5,0,10,9,5,0,3,0,2,0,0,0,0,9];
var inputArray4 = [2,0,8,5,0,10,9,5,0,3,0,2,9];
console.log(jumpGameI(inputArray0))
console.log(jumpGameI(inputArray1))
console.log(jumpGameI(inputArray2))
console.log(jumpGameI(inputArray3))
console.log(jumpGameI(inputArray4))
console.log("The End")