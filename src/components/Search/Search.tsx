import { ChangeEvent, useEffect, useState } from 'react';

import useDebounce from '@/hooks/useDebounce';

import MagnifyGlass from '../icons/MagnifyGlass';
const SEARCH_DELAY = 500;

interface SearchProps {
  onSearchChange: (searchText: string) => void;
}

const Search = ({ onSearchChange }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, SEARCH_DELAY);

  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  return (
    <div className="form-control">
      <div className="input-group">
        <span className="">
          <MagnifyGlass />
        </span>
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
