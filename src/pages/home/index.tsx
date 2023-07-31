import SearchBar from '../../components/search-bar';
import UserDetails from '../../components/user-details';
import { GlobalState } from '../../types/global-state';

function Home({ globalState }: { globalState: GlobalState }) {
  const { userData, getData, loading } = globalState;
  return (
    <>
      <SearchBar loading={ loading } getData={ getData } />

      {userData && <UserDetails
        userData={ userData }
      />}

    </>
  );
}

export default Home;
