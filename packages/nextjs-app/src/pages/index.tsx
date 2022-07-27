import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { Button } from '@festibuddy/uikit-lib';
import styled from 'styled-components';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery([
    'example.hello',
    { text: 'from tRPC' },
  ]);

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
        <Actions>
          <Button>Log in</Button>
          <Button>Register</Button>
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
`;
