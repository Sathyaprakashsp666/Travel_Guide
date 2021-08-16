import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../placeDetails/placeDetails";
import HotelIcon from '@material-ui/icons/Hotel';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PlaceIcon from '@material-ui/icons/Place';

const List = ({ places, type, setType, rating, setRating, isLoading }) => {
  const classes = useStyles();

  //handling inputs

  return (
    <div className={classes.container}>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" color="secondary" />
          <Typography variant="h5">Please wait loading.....</Typography>
        </div>
      ) : (
        <>
          <Typography variant="h5">
            Restaurents <RestaurantIcon/>,<br/> Hotels <HotelIcon/> <br/>& Attractions around you <PlaceIcon/>
          </Typography>

          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurents</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, index) => {
              return <PlaceDetails place={place} />;
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
