import styled from "styled-components";

import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";

function App() {
  return (
    <Wrapper>
      <SortingVisualizer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 98vw;
  height: 98vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App;
