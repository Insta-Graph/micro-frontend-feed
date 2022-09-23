import { UserLayout, ApolloProvider, apolloClient } from '@snapify/shared-modules';

import Feed from './components/Feed';

const Root: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <UserLayout>
        <Feed />
      </UserLayout>
    </ApolloProvider>
  );
};

export default Root;
