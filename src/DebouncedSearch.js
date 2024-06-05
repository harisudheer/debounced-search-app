import React, { useState, useEffect, useRef } from 'react';

const DebouncedSearch = () => {
  const [query, setQuery] = useState('');
  const [displayQuery, setDisplayQuery] = useState('');
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      setDisplayQuery(query);
      console.log('API Call with query:', query);
    }, 1000); 

    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} placeholder="Search..." />
      <p>Searching for: {displayQuery}</p>
    </div>
  );
};

export default DebouncedSearch;
