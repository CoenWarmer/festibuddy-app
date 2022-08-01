import React from 'react';
import styled from 'styled-components';

export const AwaitingFriends: React.FC = ({}) => {
  return (
    <Container>
      <Name>Awaiting friends</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  border: solid 2px #000;
  background: rgba(1, 1, 1, 0.2);
  width: 25%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Name = styled.h2`
  margin: 0;
  padding: 0 0 10px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;
