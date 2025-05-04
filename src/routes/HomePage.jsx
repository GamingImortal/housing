import React, { useState } from "react";
import FeaturedProperties from "./FeaturedProperties";
import SearchBar from "./SearchBar";
import Testimonials from "./Testimonials";
import "./HomePage.scss";

const propertiesData = [
    { id: 1, image: "https://via.placeholder.com/300", title: "Luxury Villa", location: "Miami, FL", description: "Beautiful ocean view.", price: "$500,000" },
    { id: 2, image: "https://via.placeholder.com/300", title: "Modern Apartment", location: "New York, NY", description: "City skyline views.", price: "$300,000" },
];

const HomePage = () => {
    const [filteredProperties, setFilteredProperties] = useState(propertiesData);

    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Find Your Perfect Place to Live with HousingConnect</h1>
                <p>Browse thousands of properties, connect with verified landlords, and find your dream home</p>
                <SearchBar properties={propertiesData} setFilteredProperties={setFilteredProperties} />
            </div>
            <FeaturedProperties properties={filteredProperties} />
            <Testimonials />
        </div>
    );
};

export default HomePage;
