import { UserLayout, ApolloProvider, AuthProvider, ThemeProvider } from '@snapify/shared-modules';

import Feed from './components/Feed';

const Root: React.FC = () => {
  return (
    <AuthProvider>
      <ApolloProvider>
        <ThemeProvider>
          <UserLayout>
            <Feed />
          </UserLayout>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
};

export default Root;
