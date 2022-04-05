const pairSum = (numbers, targetSum) => {
  // targetSum = numbers[x] + numbers[y]
  // targetSum - numbers[x] = numbers[y]
  // targetSum - numbers[y] = numbers[x]

  let finalArray = [];

  // iterate over numbers array
  numbers.forEach((num, i) => {
    // compute the difference between targetSum and num
    let complement = targetSum - num

    // check if difference is present in numbers array
    // and difference isnt the same as num
    if (numbers.includes(complement) && complement !== num) {
      // compute sum of diff and num
      let sum = complement + num

      // if sum equals targetSum, return indices of...
      if (targetSum === sum) {
        // console.log([i, numbers.indexOf(diff)])
        finalArray.push([i, numbers.indexOf(complement)])
      }
    }
  })
  console.log(finalArray[0]);
  return finalArray;
};




pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]

pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]

pairSum([1, 6, 7, 2], 13); // -> [1, 2]

pairSum([9, 9], 18); // -> [0, 1]

pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]
         