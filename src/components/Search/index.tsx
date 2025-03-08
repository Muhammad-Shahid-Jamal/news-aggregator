import { useEffect, useState } from 'react';
import { useNews } from '../../../context/NewsContext';
import useDebounce from '../../../hooks/useDebounce';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setQuery } = useNews();
  const debounceQuery = useDebounce(searchQuery, 500);
  useEffect(() => {
    if (debounceQuery) {
      setQuery(searchQuery);
    }
  }, [debounceQuery]);
  return (
    <div className="relative max-w-md">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-primary rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 3a7.5 7.5 0 005.65 13.65z"
        />
      </svg>
    </div>
  );
};

export default Search;
