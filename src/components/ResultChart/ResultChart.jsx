import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
  {
    "student_id": 1,
    "name": "Alice",
    "physics": 85,
    "chemistry": 90,
    "math": 88
  },
  {
    "student_id": 2,
    "name": "Bob",
    "physics": 92,
    "chemistry": 85,
    "math": 91
  },
  {
    "student_id": 3,
    "name": "Charlie",
    "physics": 78,
    "chemistry": 82,
    "math": 95
  },
  {
    "student_id": 4,
    "name": "David",
    "physics": 88,
    "chemistry": 76,
    "math": 84
  },
  {
    "student_id": 5,
    "name": "Eva",
    "physics": 95,
    "chemistry": 94,
    "math": 98
  },
  {
    "student_id": 6,
    "name": "Fahim",
    "physics": 70,
    "chemistry": 65,
    "math": 72
  },
  {
    "student_id": 7,
    "name": "Grace",
    "physics": 81,
    "chemistry": 89,
    "math": 79
  },
  {
    "student_id": 8,
    "name": "Hana",
    "physics": 64,
    "chemistry": 73,
    "math": 68
  },
  {
    "student_id": 9,
    "name": "Ivan",
    "physics": 89,
    "chemistry": 91,
    "math": 93
  },
  {
    "student_id": 10,
    "name": "Jack",
    "physics": 75,
    "chemistry": 80,
    "math": 77
  }
]
const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke='red'></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;