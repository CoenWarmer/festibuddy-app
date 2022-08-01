import React from 'react';
import styled from 'styled-components';
import { AwaitingFriends } from './AwaitingFriends';
import { Friend, FriendProps } from './Friend';

interface FriendsProps {
  friends: (FriendProps & { id: string })[];
}

export const Friends: React.FC<FriendsProps> = ({ friends }) => {
  return (
    <Container>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          battStatus={friend.battStatus}
        />
      ))}

      <AwaitingFriends />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  height: 20vh;
  width: 100%;
  overflow: hidden;
  background: rgba(244, 215, 100, 0.5);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`;
