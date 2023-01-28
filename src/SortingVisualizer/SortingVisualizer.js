import { useEffect, useState } from "react";
import styled from "styled-components";

import { mergeSort } from "../SortingAlgorithms/MergeSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const [animations, setAnimations] = useState([]);

  const [highlighted, setHighlighted] = useState([]);

  useEffect(() => {
    setArray(resetArray(5, 500));
  }, []);

  useEffect(() => {
    if (animations !== undefined) {
      for (let i = 1; i <= animations.length; i++) {
        setTimeout(() => {
          setArray([...animations[i]["wholeArray"]]);
          setHighlighted([...animations[i]["highlighted"]]);
        }, 500 * i);
      }
    }
  }, [animations]);

  return (
    <>
      <Chart>
        {array.length === 0 ? (
          <p>Loading</p>
        ) : (
          array.map((e, i) => <Bar key={i} height={e} target={highlighted[0] === i} highlighted={highlighted.includes(i)}></Bar>)
        )}
      </Chart>
      <Buttons>
        <button
          onClick={() => {
            setArray(resetArray(5, 500));
            setAnimations([]);
            setHighlighted([]);
          }}
        >
          Generate New Array
        </button>
        <button onClick={() => setAnimations(mergeSort(array))}>
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
  background-color: ${ (props) => 
    props.highlighted ? "red" : "cornflowerblue"
  };
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
