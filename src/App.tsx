import React from 'react';
import styled from 'styled-components';

const TestDiv = styled.div`
  background-color: red;
  padding: 20px;
`;

const App: React.FC = () => (
  <React.Fragment>
    <TestDiv>Новый проект.</TestDiv>
  </React.Fragment>
);

export default App;
