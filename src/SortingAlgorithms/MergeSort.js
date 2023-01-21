// Function to sort 2 sorted arrays
const merge = (setArray, arr1, arr2) => {
  let sortedArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  setArray([...sortedArr, ...arr1, ...arr2]);

  return [...sortedArr, ...arr1, ...arr2];
};


// Function to split arrays into smaller arrays
export const mergeSort = (arr, setArray) => {
  const aLen = arr.length;

  if (aLen === 1) {
    return arr;
  }

  let arr1 = arr.slice(0, aLen / 2);
  let arr2 = arr.slice(aLen / 2);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  

  return merge(setArray, arr1, arr2);
};

