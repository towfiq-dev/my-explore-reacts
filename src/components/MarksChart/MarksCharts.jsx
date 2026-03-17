import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksCharts = ({marksPromise}) => {
  const marksDataRes = use(marksPromise)
  const marksData = marksDataRes.data
  const marksChartData = marksData.map(studentData=> {
    const student ={
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math
    }
    const avg = (student.physics + student.chemistry + student.math) /3;
    student.avg = avg;
    return student
  })
  return (
    <div>
    <BarChart width={1200} height={400} data={marksChartData}>
    <XAxis dataKey={'name'}></XAxis>
    <YAxis></YAxis>
    <Bar fill='yellow' dataKey={'physics'}></Bar>
    <Bar fill='blue' dataKey={'chemistry'}></Bar>
    <Bar fill='aqua' dataKey={'math'}></Bar>
    <Bar fill='green' dataKey={'avg'}></Bar>
    </BarChart>
    </div>
  );
};

export default MarksCharts;