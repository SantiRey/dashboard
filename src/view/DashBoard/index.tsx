import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Link from '@mui/material/Link';
//import { useSelector } from 'react-redux';
import SkeletonContent from '../../component/structur/skeleton';
import TickesTable from '../../component/tickets/ticketsTable';
import { OpenOngoingTicketsChart } from '../../component/OpenOngoingTicketsChart';
import { useGetTicketByStatus } from '../../utils/data';
import Tier from '../../component/tier';

function DashboardContent() {
  //const user = useSelector((state: { user: any }) => state.user);
  const getTicketsByStatus = useGetTicketByStatus();
  const openTickets = getTicketsByStatus.getOpen;
  const inProgressTickets = getTicketsByStatus.getInProgress;
  
  return (
    <SkeletonContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={12} lg={7}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 500,
              }}
            >
              {/*<Chart />*/}
              <Tier/>
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={12} lg={5}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 500,
              }}
            >
              <OpenOngoingTicketsChart
                chartSeries={[openTickets.length, inProgressTickets.length]}
                labels={['open', 'ongoing']}
                sx={{ height: '100%' }}
              />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <TickesTable />
              <Link
                color="primary"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                }}
                sx={{ mt: 3 }}
              >
                See more orders
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SkeletonContent>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
