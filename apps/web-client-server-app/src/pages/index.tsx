import { Button, LoadingSpinner, Title } from '@festibuddy/uikit-lib';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import styled from 'styled-components';

import { PageLayout } from '../components/PageLayout';

const Home: NextPage = () => {
  const { data: sessionData, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (sessionData) {
        router.push('/profile');
      }
    }, 2000);
  }, [router, sessionData]);

  return (
    <PageLayout>
      <Head>
        <title>Festibuddy</title>
        <meta
          name="description"
          content="The fun way to experience a festival"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Title>Festibuddy</Title>

        {status === 'authenticated' ? (
          <LoadingSpinner loading color="#ff0000" />
        ) : null}

        <Actions>
          <Button onClick={sessionData ? () => signOut() : () => signIn()}>
            {sessionData ? 'Sign out' : 'Sign in'}
          </Button>
        </Actions>
      </Container>
    </PageLayout>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;
