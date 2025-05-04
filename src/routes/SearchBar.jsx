import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ properties, setFilteredProperties }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        // Filter properties based on search term
        const filtered = properties.filter((property) =>
            property.title.toLowerCase().includes(term) ||
            property.location.toLowerCase().includes(term)
        );

        setFilteredProperties(filtered);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for Properties"
            />
        </div>
    );
};

export default SearchBar;

