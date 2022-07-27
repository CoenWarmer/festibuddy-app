import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  width: fit-content;
`;
