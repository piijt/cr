import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
       setDailyData(await fetchDailyData());
    }
    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length
      ? (
        <Line
        options={{
          legend: {
               labels: {
                    fontColor: '#f1f1f1'
                   }
                },
          title: {
              display: true,
              fontColor: '#f1f1f1',
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      fontColor: '#f1f1f1'
                  },
              }],
            xAxes: [{
                  ticks: {
                      fontColor: '#f1f1f1'
                  },
              }]
          }
        }}
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets:[{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#02a8b5',
            fill: false
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: '#ff5b5b',
            fill: true
          }],
        }}
      />) : null
  );

  console.log(confirmed, recovered, deaths);

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: ['#02a8b5', ' #10c469', '#ff5b5b'],
              data: [confirmed.value, recovered.value, deaths.value]
            }],
          }}
          options={{
            legend: { display: false },
            title: {display: true, text: `Current state in ${country}` },
          }}
        />
      ) : null
  );

  return(
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;
