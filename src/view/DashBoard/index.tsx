import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Link from '@mui/material/Link';
//import { useSelector } from 'react-redux';
import SketchContent from '../../component/structur';
import TickesTable from '../../component/tickesTable';

function DashboardContent() {
  //const user = useSelector((state: { user: any }) => state.user);

  return (
    <SketchContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              {/*<Chart />*/}
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
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
    </SketchContent>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
