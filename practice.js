console.log(mostFrequent([1, 4, 3, 2, 3, 3, 2, 4]));
function mostFrequent(arr) {
  let highestCountNumber = null;
  let highestCount = 0;
  let frequency = {};
  for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;

      if (frequency[num] > highestCount) {
      highestCount = frequency[num];
      highestCountNumber = num;
  }
  
  }
  return `Highest count number: ${highestCountNumber}`;  
} 
