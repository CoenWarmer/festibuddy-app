import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@festibuddy/uikit-lib';
import styled from 'styled-components';

const Home: NextPage = () => {
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

        <Form>
          <Label>Username</Label>
          <input />
          <Label>Password</Label>
          <input />
          <Label>I agree with receiving notifications</Label>
          <Checkbox type="checkbox" />
          We will only use this so you can retrieve your account details.
        </Form>

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
