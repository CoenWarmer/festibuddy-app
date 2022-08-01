import { Button, Title } from '@festibuddy/uikit-lib';
import { NextPage } from 'next';
import Router from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';

import { PageLayout } from '../components/PageLayout';

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();

  const handleSelectJoinGroup = () => {
    Router.push('/group');
  };

  const handleSelectCreateGroup = () => {
    Router.push('/profile');
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <PageLayout>
      <Container>
        <Title>Hi {sessionData?.user?.name}</Title>
        <Actions>
          <Button onClick={handleSelectJoinGroup}>Join group</Button>
          <Button disabled onClick={handleSelectCreateGroup}>
            Create group
          </Button>
          <Button onClick={handleLogout}>Log out</Button>
        </Actions>
      </Container>
    </PageLayout>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  display: flex;
`;
