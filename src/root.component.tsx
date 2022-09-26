import {
  UserLayout,
  ApolloProvider,
  AuthProvider,
  ThemeProvider,
  ErrorBoundary,
} from '@snapify/shared-modules';

import Feed from './components/Feed';

const Root: React.FC = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ApolloProvider>
          <ThemeProvider>
            <UserLayout>
              <Feed />
            </UserLayout>
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default Root;
