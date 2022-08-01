import React from 'react';
import { SquareLoader } from 'react-spinners';

interface LoadingSpinnerProps {
  color: string;
  loading: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color,
  loading,
}) => {
  return <SquareLoader color={color} loading={loading} />;
};
