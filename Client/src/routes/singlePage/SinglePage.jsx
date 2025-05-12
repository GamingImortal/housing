import React, { useState } from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import "./SinglePage.scss";
import Map from "../../components/map/Map";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupsIcon from "@mui/icons-material/Groups";
import WavesIcon from "@mui/icons-material/Waves";
import BoltIcon from "@mui/icons-material/Bolt";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import WcIcon from "@mui/icons-material/Wc";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

export const SinglePage = () => {
  const [save, setSave] = useState(false);
  const [submit, setSubmit] = useState(false);

  const singledata = {
    id: 1,
    title: "Luxury Villa",
    // ...
    latitude: -17.7695,
    longitude: 31.041,
    id: 1,
    title: "Luxury Villa",
    price: "$500,000",
    address: "123 Plover",
    description:
      "This charming 3-bedroom, 2-bathroom home offers a perfect blend of modern comfort and classic elegance. Featuring an open-concept living area with abundant natural light, a fully equipped kitchen with stainless steel appliances, and a spacious backyard ideal for entertaining. Located in a quiet neighborhood close to schools and parks, this property is perfect for families seeking both convenience and tranquility.",

    image: [
      "https://www.insignia.com/wp-content/uploads/2020/07/LBS_TravelLifestyle_Cars-1024x576.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&w=800",
      "https://huddle.github.io/tldr/blog/img/2015-10-07-Cardboard-houses/house.jpg",
    ],
  };

  const userData = {
    name: "Logan",
    img: [
      "https://www.insignia.com/wp-content/uploads/2020/07/LBS_TravelLifestyle_Cars-1024x576.jpg",
    ],
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider image={singledata.image} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singledata.title}</h1>
                <div className="address">
                  <LocationPinIcon />
                  <span>{singledata.address}</span>
                </div>
                <div className="price">{singledata.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">{singledata.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="general">General</p>
          <div className="listVertical">
            <p className="title">
              <MoreHorizIcon />
              Status:{" "}
            </p>
            <p className="title">
              <MyLocationIcon />
              Distance From Campus:{" "}
            </p>
            <p className="title">
              <WcIcon />
              Gender:{" "}
            </p>
            <p className="title">
              <GroupsIcon />
              People in a Room:{" "}
            </p>
          </div>

          <p className="service">Services</p>
          <div className="services">
            <p className="title">
              <BoltIcon />
              Solar BackUp:{" "}
            </p>
            <p className="title">
              <WavesIcon />
              Water:{" "}
            </p>
            <p className="title">
              <NetworkWifiIcon />
              Unlimited Wifi:{" "}
            </p>
            <p className="title">
              <OutdoorGrillIcon />
              Stove:{" "}
            </p>
            <p className="title">
              <MicrowaveIcon />
              Stove BackUp:{" "}
            </p>
            <p className="title">
              <MyLocationIcon />
              Address:{" "}
            </p>
          </div>
          <p className="location">Location on Map</p>
          <div className="mapContainer">
            <Map items={[singledata]} />
          </div>
          <div className="buttons">
            {save === false ? (
              <BookmarkBorderOutlinedIcon onClick={() => setSave(!save)} />
            ) : (
              <BookmarkIcon onClick={() => setSave(!save)} />
            )}
            {submit === false ? (
              <Button className="outlined" onClick={() => setSubmit(!submit)}>
                Book
              </Button>
            ) : (
              <Button type="disabled">Submitted</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
