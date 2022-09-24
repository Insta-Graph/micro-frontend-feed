import { UserLayout, ApolloProvider, AuthProvider } from '@snapify/shared-modules';

import Feed from './components/Feed';

const Root: React.FC = () => {
  return (
    <AuthProvider>
      <ApolloProvider>
        <UserLayout>
          <Feed />
        </UserLayout>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default Root;
