import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BatteryState } from 'react-use/lib/useBattery';

export interface FriendProps {
  avatar: string;
  battStatus: BatteryState;
  name: string;
}

export const Friend: React.FC<FriendProps> = ({
  avatar = '🐙',
  battStatus,
  name,
}) => {
  return (
    <Container>
      <Avatar>{avatar}</Avatar>
      <Name>{name}</Name>
      <BatteryIcon>
        <Fill level={battStatus.level * 100} />
      </BatteryIcon>
    </Container>
  );
};

const hoverAnimation = keyframes`
0%    {transform: translate3d(0,20%,0) scale3d(1,1,1);}
10%   {transform: translate3d(0,5%,0) scale3d(.9,1,1);}
20%   {transform: translate3d(0,0,0) scale3d(1.1,.9,1);}
30%   {transform: translate3d(0,5%,0) scale3d(.9,1,1);}
40%   {transform: translate3d(0,20%,0) scale3d(1,1,1);}
50%   {transform: translate3d(0,20%,0) scale3d(1,1,1);}
100%   {transform: translate3d(0,20%,0) scale3d(1,1,1);}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 2px #000;
  background: #fff;
  flex-grow: 0;
  flex-shrink: 0;
  width: 25%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Name = styled.h2`
  margin: 0;
  padding: 0 0 10px;
`;

const Avatar = styled.p`
  font-size: 60px;
  margin: 0;
  padding: 0;
  animation: ${hoverAnimation} 3s linear alternate infinite;
`;

const BatteryIcon = styled.div`
  display: flex;
  height: 30%;
  width: 30px;
  border: solid 2px #000;
  border-radius: 4px;
  align-items: end;
`;

const Fill = styled.div<{ level: number }>`
  display: flex;
  height: ${(props) => props.level}%;
  width: 100%;
  background-color: ${(props) => {
    if (props.level > 80) {
      return 'green';
    }

    if (props.level > 60) {
      return 'yellow';
    }

    if (props.level > 40) {
      return 'orange';
    }

    if (props.level > 20) {
      return 'red';
    }
  }};
`;
