import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserSearch = () => {
  // State variables for search query and search results
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetching search results from the server using axios
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`/api/users/search?q=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSearchResults();
  }, [query]);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h2>User Search</h2>
      {/* Search input */}
      <input type="text" value={query} onChange={handleSearchInputChange} />
      {/* List of search results */}
      {searchResults.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserSearch;
