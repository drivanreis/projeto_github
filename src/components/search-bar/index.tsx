import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import './search-bar.css';

type SearchBarProps = {
  loading: boolean;
  getData: (user: string) => void;
};

function SearchBar({ loading, getData }: SearchBarProps) {
  const [user, setUser] = useState('');

  const handleSubmit = () => {
    if (user) {
      getData(user);
    }
  };

  return (
    <div className="container">
      <HiMagnifyingGlass />
      <input
        type="text"
        placeholder="Github username"
        value={ user }
        onChange={ (e) => setUser(e.target.value) }
      />

      <button onClick={ handleSubmit }>
        <span>Search</span>
        {loading && <span className="spinner" />}
      </button>
    </div>
  );
}

export default SearchBar;
