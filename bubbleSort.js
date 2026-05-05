function bubbleSort(array){
  let index = 0;
  while(index<array.length-1){
    //if this condition is met, swap and reiterate
    if(array[index] > array[index+1]){
      //swap numbers
      let aux = array[index];
      array[index] = array[index+1];
      array[index+1] = aux;
      //restart the count
      index=0;
    }else{
      //continue the count
      index++;
    }
  }
  return array
}

console.log(bubbleSort([0,1,4,2,5,3]));
