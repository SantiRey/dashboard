import Chart from 'react-apexcharts';
import { useGetTiers, useGetTiersCount } from '../utils/data';
import Title from './structur/title';
import { CardContent } from '@mui/material';
function Tier() {
  const getTiers = useGetTiers();
  const getTiersCount = useGetTiersCount();
  const tiers = getTiers();

  const state = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [...tiers],
      },
      tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
          background: '#f3f3f3',
          color: 'orange',
          fontFamily: 'Open Sans, sans-serif',

        },
      }
    },
    series: [
      {
        name: 'tickets',
        data: getTiersCount(),
      },
    ],
  };

  return (
        <>
        <Title>Tickets By Tier</Title>
        <CardContent>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
          </CardContent>
        </>
  );
}

export default Tier;
