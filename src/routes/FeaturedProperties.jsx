import React from "react";
import "./FeaturedProperties.scss";

const FeaturedProperties = ({ properties }) => {
    return (
        <div className="featured-properties">
            <h2>Featured Properties</h2>
            <div className="properties-list">
                {properties.length > 0 ? (
                    properties.map((property) => (
                        <div key={property.id} className="property-card">
                            <img src={property.image} alt={property.title} />
                            <h3>{property.title}</h3>
                            <p>{property.description}</p>
                            <p><strong>Price:</strong> {property.price}</p>
                            <p><strong>Location:</strong> {property.location}</p>
                            <button>View Details</button>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default FeaturedProperties;

