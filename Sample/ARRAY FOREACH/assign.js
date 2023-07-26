const Arr = [94, 67, 15, 22, 83, 38, 67, 49, 30, 15, 82, 52, 13, 73, 76, 92, 65, 95, 29, 38, 83, 9, 1, 48, 32];
const sumOfEvenNumbers = Arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
console.log("Sum of even numbers:", sumOfEvenNumbers); 
const max = Math.max(...Arr);
const min = Math.min(...Arr);
console.log("Maximum number:", max); 
console.log("Minimum number:", min); 
const searchElement = 94;
const index = Arr.indexOf(searchElement);
console.log("Index of", searchElement + ":", index); 
function isAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  console.log("Is the array sorted in ascending order?", isAscending(Arr)); 
  const uniqueArr = Arr.filter((value, index, self) => self.indexOf(value) === index);
console.log("Array without duplicates:", uniqueArr); 