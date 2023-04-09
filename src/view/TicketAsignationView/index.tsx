import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import SkeletonContent from '../../component/structur/skeleton';
import TicketCreationForm from '../../component/tickets/ticketCreationForm';

function TicketAsignationContent() {
  return (
    <SkeletonContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <TicketCreationForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SkeletonContent>
  );
}

export default function TicketAsignationView() {
  return <TicketAsignationContent />;
}
