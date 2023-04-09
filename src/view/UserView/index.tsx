import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import SkeletonContent from '../../component/structur/skeleton';
import UserCard from '../../component/user/userCard';

function UserBoardContent() {
  return (
    <SkeletonContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <UserCard />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SkeletonContent>
  );
}

export default function UserView() {
  return <UserBoardContent />;
}
