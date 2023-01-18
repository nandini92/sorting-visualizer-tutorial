import { useEffect, useState } from "react";

import styled from "styled-components";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(resetArray(5, 500));
  }, []);

  return (
    <>
      <Chart>
        {array.length === 0 ? (
          <p>Loading</p>
        ) : (
          array.map((e, i) => <Bar key={i} height={e}></Bar>)
        )}
      </Chart>
      <Buttons>
        <button onClick={() => setArray(resetArray(5, 500))}>
          Generate New Array
        </button>
        <button onClick={() => setArray(mergeSort(array))}>
          Merge Sort
        </button>
      </Buttons>
    </>
  );
};

const resetArray = (min, max) => {
  const temp = [];

  for (let i = 0; i < 100; i++) {
    temp.push(Math.floor(Math.random() * (max - min) + min));
  }

  return temp;
};

const merge = (arr1, arr2) => {
  let sortedArr = [];

  while ( arr1.length && arr2.length ){
    if(arr1[0] <= arr2[0]){
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }

  return [...sortedArr, ...arr1, ...arr2];
}

const mergeSort = (arr) => {
  const aLen = arr.length;

  if(aLen === 1) {
    return arr;
  }

  let arr1 = arr.slice(0, aLen/2);
  let arr2 = arr.slice(aLen/2);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

 return merge(arr1, arr2);
}

const Chart = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;
const Bar = styled.div`
  height: ${(props) => `${props.height}px`};
  min-width: 5px;
  background-color: cornflowerblue;
`;
const Buttons = styled.div`
  width: 90%;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
`;
export default SortingVisualizer;
