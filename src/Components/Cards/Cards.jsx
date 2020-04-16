import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ( { data: { confirmed, recovered, deaths, lastUpdate } } ) => {

  if(!confirmed) {
    return 'Loading data...'
  }

  return(
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography className={styles.heading} gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator="."/>
            </Typography>
            <div className={styles.infectedCases}></div>
            <Typography className={styles.date}>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of Active cases</Typography>
          </CardContent>
        </Grid>
        <div className={styles.divider}></div>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography className={styles.heading} gutterBottom>Recovered People</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator="."/>
            </Typography>
            <div className={styles.recoveredCases}></div>
            <Typography className={styles.date}>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <div className={styles.divider}></div>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography className={styles.heading} gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator="."/>
            </Typography>
            <div className={styles.deathCases}></div>
            <Typography className={styles.date}>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;
