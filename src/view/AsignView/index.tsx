import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Assing from '../../component/assign';
import SkeletonContent from '../../component/structur/skeleton';

function AssingContent() {
  return (
    <SkeletonContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
              <Assing />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SkeletonContent>
  );
}

export default function AssingView() {
  return <AssingContent />;
}
