import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  
  // State to track bars that are being "targeted" for sorting
  const [targets, setTargets] = useState([]);

  // Auxiliary array to maintain indexes of items while sort is occurring
  const [auxiliaryArray, setAuxiliaryArray] = useState([]);
  
  // Increasing const to ensure visualization happens sequentially with setTimeOut. 
  const count = useRef(1);

  useEffect(() => {
    setArray(resetArray(5, 500));
  }, []); 

  // Function to sort 2 sorted arrays
  const merge = (arr1, arr2) => {
  let sortedArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }

  setTimeout(() => {
    setTargets([...sortedArr, ...arr1, ...arr2]);
  }, 1000*count.current);

  if ( count.current <= 10 ){
    count.current = count.current + 1;
  } else {
    count.current = 1; 
  }
  
  return [...sortedArr, ...arr1, ...arr2];
};


// Function to split arrays into smaller arrays
const mergeSort = (arr) => {
  const aLen = arr.length;

  if (aLen === 1) {
    return arr;
  }

  let arr1 = arr.slice(0, aLen / 2);
  let arr2 = arr.slice(aLen / 2);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
};

  return (
    <>
      <Chart>
        {array.length === 0 ? (
          <p>Loading</p>
        ) : (
          array.map((e, i) => 
          targets.includes(e) 
          ? <Bar key={i} height={e} target></Bar>
          : <Bar key={i} height={e} ></Bar>
          )
        )}
      </Chart>
      <Buttons>
        <button onClick={() => {
          setArray(resetArray(5, 500));
          setTargets();
          count.current = 1;
          }}>
          Generate New Array
        </button>
        <button onClick={() => (mergeSort(array))}>
          Merge Sort
        </button>
      </Buttons>
    </>
  );
};


const resetArray = (min, max) => {
  const temp = [];

  for (let i = 0; i < 10; i++) {
    temp.push(Math.floor(Math.random() * (max - min) + min));
  }

  return temp;
};


const Chart = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;
const Bar = styled.div`
  height: ${(props) => `${props.height}px`};
  min-width: 20px;
  background-color: ${(props) => props.target === true ? "red" : "cornflowerblue"};
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
