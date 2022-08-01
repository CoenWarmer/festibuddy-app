import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  width: fit-content;
`;
