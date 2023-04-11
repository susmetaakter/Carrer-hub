import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = {
        datasets: [
          {
            label: 'Assignment Marks',
            data: [
              { x: 1, y: 75 },
              { x: 2, y: 60 },
              { x: 3, y: 80 },
              { x: 4, y: 90 },
              { x: 5, y: 70 },
              { x: 6, y: 65 },
              { x: 7, y: 85 },
              { x: 8, y: 50 },
              { x: 9, y: 75 },
              { x: 10, y: 80 }
            ],
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
          }
        ]
      };
      
      const options = {
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
              ticks: {
                beginAtZero: true,
                stepSize: 1
              },
              scaleLabel: {
                display: true,
                labelString: 'Assignment Number'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                stepSize: 10
              },
              scaleLabel: {
                display: true,
                labelString: 'Marks'
              }
            }
          ]
        }
      };
      

      return (
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid />
            <XAxis type="linear" dataKey="x" name="Assignment Number" />
            <YAxis type="linear" dataKey="y" name="Marks" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={data} fill="#8884d8" />
            <Scatter options ={options} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      );
    }

export default Statistics;