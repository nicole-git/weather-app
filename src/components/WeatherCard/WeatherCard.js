import React from "react";
import { Paper, Typography, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      backgroundColor: "#FDF6F0",
      marginBottom: 10,
      width: 400,
      padding: 10
    },
    day: {
      fontSize: 22
    }
  })
);

const WeatherCard = props => {
  const classes = useStyles();

  return (
    <div>
      {props.cards.map(card => (
        <Paper className={classes.paper}>
          <Typography className={classes.day}>{card.day}</Typography>
          <Typography>{card.temperature}</Typography>
          <Typography>{card.info}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default WeatherCard;
