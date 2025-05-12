import React from "react";
import Filter from "../../components/Filter/Filter";
import "./listPage.scss";
import List from "../../components/list/list";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

export default function ListPage() {
  const data = [
    {
      id: 1,
      image:
        "https://www.insignia.com/wp-content/uploads/2020/07/LBS_TravelLifestyle_Cars-1024x576.jpg",
      title: "Luxury Villa",
      location: "Mt Pleasant, Harare",
      description: "Beautiful garden and modern design.",
      price: "$500,000",
      latitude: -17.767,
      longitude: 31.0456,
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/R.0f41aa8c195674335ca048e33c5e15dd?rik=766RZMJcElL0AQ&riu=http%3a%2f%2fgtspirit.com%2fwp-content%2fuploads%2f2015%2f07%2fPagani-Huayra-11.jpg&ehk=vfGa%2fCzMqkNa2J8r%2b4Taus0S3H7Yn9RTjOcjpPFaL9E%3d&risl=&pid=ImgRaw&r=0",
      title: "Modern Apartment",
      location: "Mt Pleasant, Harare",
      description: "Close to university and amenities.",
      price: "$300,000",
      latitude: -17.765,
      longitude: 31.048,
    },
    {
      id: 3,
      image: "https://wallpaperaccess.com/full/226035.jpg",
      title: "Cozy Cottage",
      location: "Avondale, Harare",
      description: "Charming cottage in a quiet street.",
      price: "$250,000",
      latitude: -17.8001,
      longitude: 31.0347,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      title: "Beach House",
      location: "Avondale, Harare",
      description: "Spacious home with lush backyard.",
      price: "$800,000",
      latitude: -17.798,
      longitude: 31.032,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      title: "Suburban Family Home",
      location: "Vainona, Harare",
      description: "Modern kitchen and open living space.",
      price: "$400,000",
      latitude: -17.7705,
      longitude: 31.0772,
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300",
      title: "Downtown Loft",
      location: "Vainona, Harare",
      description: "Stylish loft with city access.",
      price: "$600,000",
      latitude: -17.772,
      longitude: 31.079,
    },
    {
      id: 7,
      image: "https://via.placeholder.com/300",
      title: "Historic Townhouse",
      location: "Marlborough, Harare",
      description: "Classic charm with modern updates.",
      price: "$550,000",
      latitude: -17.7792,
      longitude: 30.9634,
    },
    {
      id: 8,
      image: "https://via.placeholder.com/300",
      title: "Lakefront Cabin",
      location: "Marlborough, Harare",
      description: "Quiet retreat near local shops.",
      price: "$750,000",
      latitude: -17.78,
      longitude: 30.965,
    },
    {
      id: 9,
      image:
        "https://storage.googleapis.com/gtspirit/uploads/2015/05/Pagani-Huayra-The-King-1.jpg",
      title: "Penthouse Suite",
      location: "Harare CBD",
      description: "Luxury living with panoramic views.",
      price: "$1,200,000",
      latitude: -17.8292,
      longitude: 31.0522,
    },
    {
      id: 10,
      image: "https://via.placeholder.com/300",
      title: "Country Estate",
      location: "Harare CBD",
      description: "Expansive grounds and guest house.",
      price: "$950,000",
      latitude: -17.827,
      longitude: 31.049,
    },
  ];

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>

      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}
