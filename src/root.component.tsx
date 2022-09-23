import { UserLayout, ApolloProvider, apolloClient, AuthProvider } from '@snapify/shared-modules';

import Feed from './components/Feed';

const Root: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <UserLayout>
          <Feed />
        </UserLayout>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default Root;
