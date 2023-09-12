import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Uma comida mt gostosa We - that is Maximilian Schwarzmüller and Manuel
        Lorenz. We built this course together and our goal is to either provide
        you an easy entry into CSS or help you dive deeper in case you already
        know the basics.
      </p>
    </section>
  );
};

export default MealsSummary;
