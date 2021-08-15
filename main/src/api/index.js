import React from "react";
import axios from "axios";

export const getPlaceData = async (sw, ne, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          // bl_latitude: '11.847676',
          // tr_latitude: '12.838442',
          // bl_longitude: '109.095887',
          // tr_longitude: '109.149359',
        },
        headers: {
          "x-rapidapi-key":
           process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
