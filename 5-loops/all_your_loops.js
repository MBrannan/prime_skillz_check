// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
  for(var i = 0; i < 5; i++) {
    checkz++;
  }

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
  i = 0;
  for(i = 0; i < 3; i++) {
    checkz -= 2;
  }
// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

//This loop is adding up all of the numbers in the numbers array.
//The first line is creating the numbers array, and adding values to it.
//The second line is creating a variable to store the total.
//The third line is declaring the parameters of the for loop. In this case, it is setting the index to zero, stating that the loop will run the length of the array, and that the index position will increase by one each time through the loop.
//The fourth line is adding the number at the specified version to the total.
//Line 24 is logging the total after the loop is complete.
