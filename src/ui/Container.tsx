import React, { ReactElement, JSXElementConstructor } from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
`;

interface IContainer {
  children:
    | string
    | number
    | ReactElement<any, string | JSXElementConstructor<any>>;
}

const Container: React.FC<IContainer> = ({ children }) => (
  <SContainer>{children}</SContainer>
);

export { Container };
