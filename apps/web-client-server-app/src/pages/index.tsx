import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@festibuddy/uikit-lib';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { trpc } from '../utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: secretMessage, isLoading } = trpc.useQuery([
    'question.getSecretMessage',
  ]);

  const { data: sessionData } = useSession();

  console.log('sessionData', sessionData);

  return (
    <>
      <Head>
        <title>Festibuddy</title>
        <meta
          name="description"
          content="The fun way to experience a festival"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Festibuddy</h1>

        {sessionData ? <div>Welcome, {sessionData.user.name}!</div> : null}
        <Actions>
          <Button onClick={sessionData ? () => signOut() : () => signIn()}>
            {sessionData ? 'Sign out' : 'Sign in'}
          </Button>
        </Actions>
      </Container>
    </>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Checkbox = styled.input`
  display: flex;
  align-self: baseline;
`;
