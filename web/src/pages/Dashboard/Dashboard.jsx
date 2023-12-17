import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { BarChart } from '@mui/x-charts/BarChart';
import { getChartData } from '../../services/api';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [chartDataArr, setChartData] = useState([])
  const data = ['A', 'B', 'C', 'D', 'E', 'F']
  let seriesData = chartDataArr.map(item=>{
    return {
      data: [Number(item.a), Number(item.b), Number(item.c), Number(item.d), Number(item.e), Number(item.f)],
    }
  })
  
  seriesData = seriesData.splice(chartDataArr.length - 10, chartDataArr.length - 10)

  
  async function init() {
    let data = await getChartData()
    setChartData(data)
  }
  useEffect(() => {
    init()
  }, [])
  
  return (
    <Paper sx={{ margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
      </AppBar>
      <Box>
        <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: data,
              scaleType: 'band',
            },
          ]}
          series={seriesData}
          width={700}
          height={700}
        />
      </Box>
    </Paper>
  );
}