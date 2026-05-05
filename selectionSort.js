function selectionSort(array){
  //iterate the list n-1 times each iteration
  let index = 0;
  while(index<array.length-1){
    //create local variables for the min numbers
    let minNum = array[index];
    let minNumIndex = index;
    //loop to get the min number
    for(let i = index; i<array.length; i++){
      if(array[i]<minNum){
        minNum = array[i];
        minNumIndex = i;
      }
    }
    //swap smallest for current index
    array[minNumIndex] = array[index];
    array[index] = minNum;
    index++;
  }
  return array;
}
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
