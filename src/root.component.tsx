import { UserLayout, ApolloProvider, getApolloClient, AuthProvider } from '@snapify/shared-modules';

import Feed from './components/Feed';

const Root: React.FC = () => {
  return (
    <ApolloProvider client={getApolloClient()}>
      <AuthProvider>
        <UserLayout>
          <Feed />
        </UserLayout>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default Root;
