import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles";

const Map = () => {
  const clasess = useStyles();
  const isMobile = useMediaQuery("(min-width:600px");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={clasess.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD3So3sYSHKGLf6-M1lOc0hL7uYoHjGrQA" }}   //api key from google developer console
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
