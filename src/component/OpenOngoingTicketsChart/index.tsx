import AutorenewIcon from '@mui/icons-material/Autorenew';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {
  Box,
  CardContent,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import { createTheme } from '../../theme/appTheme';
import Title from '../structur/title';
import { ChartDonnut } from './charDonnut';

const useChartOptions = (labels: any) => {
  const theme = createTheme;

  return {
    chart: {
      background: 'transparent',
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.success.main,
      theme.palette.warning.main,
    ],
    dataLabels: {
      enabled: false,
    },
    labels,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    states: {
      active: {
        filter: {
          type: 'none',
        },
      },
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      fillSeriesColor: false,
    },
  };
};
interface IconMap {
  [key: string]: React.ReactNode;
}
const iconMap: IconMap = {
  open: (
    <SvgIcon>
      <GroupRemoveIcon color="primary" />
    </SvgIcon>
  ),
  ongoing: (
    <SvgIcon>
      <AutorenewIcon color="primary" />
    </SvgIcon>
  ),
  Phone: (
    <SvgIcon>
      <PhoneAndroidIcon />
    </SvgIcon>
  ),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const OpenOngoingTicketsChart = (props: {
  chartSeries: any;
  labels: any;
  sx: any;
}) => {
  const { chartSeries, labels, sx } = props;
  const chartOptions = useChartOptions(labels);
  return (
    <>
      <Title>General View</Title>
      <CardContent>
        <ChartDonnut
          height={300}
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width="100%"
        />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={5}
          sx={{ mt: 3 }}
        >
          {chartSeries.map(
            (
              item:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined,
              index: string | number
            ) => {
              const label: string = labels[index];

              return (
                <Box
                  key={label}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {iconMap[label]}
                  <Typography variant="subtitle1">{label}</Typography>
                  <Typography color="text.primary" variant="subtitle2">
                    {item}%
                  </Typography>
                </Box>
              );
            }
          )}
        </Stack>
      </CardContent>
    </>
  );
};

OpenOngoingTicketsChart.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
