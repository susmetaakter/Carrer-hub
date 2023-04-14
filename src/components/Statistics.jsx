import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: "Assignment-1",
          assignmentMark: 42 , 
        },
        {
          name: "Assignment-2",
          assignmentMark: 48 , 
        },
        {
          name: "Assignment-3",
          assignmentMark: 49 , 
        },
        {
          name: "Assignment-4",
          assignmentMark: 45 , 
        },
        {
          name: "Assignment-5",
          assignmentMark: 60 , 
        },
        {
          name: "Assignment-6",
          assignmentMark: 45 , 
        },
        {
          name: "Assignment-7",
          assignmentMark: 56 , 
        },
        {
          name: "Assignment-8",
          assignmentMark: 60 , 
        },
        
      ];
    return (
        <div>
            <ComposedChart
            layout="vertical"
            width={1200}
            height={500}
            data={data}
            margin={{
              top: 20,
              right: 10,
              bottom: 20,
              left: 200,
            }}
            >

          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
    
          <Bar dataKey="assignmentMark" barSize={20} fill="#413ea0" />
          {/* <Line dataKey="uv" stroke="#ff7300" /> */}
            </ComposedChart>
        </div>
    );
};

export default Statistics;