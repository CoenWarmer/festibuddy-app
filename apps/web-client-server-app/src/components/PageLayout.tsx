import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { data: sessionData, status } = useSession();
  const router = useRouter();

  console.log('HELLO', router.route);

  useEffect(() => {
    if (!sessionData && status === 'unauthenticated' && router.route !== '/') {
      router.push('/');
    }
  }, [router, sessionData, status]);

  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 20px;
`;
