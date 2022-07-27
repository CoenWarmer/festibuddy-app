import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

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
      <div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
