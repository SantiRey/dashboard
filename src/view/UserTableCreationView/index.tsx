import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import SkeletonContent from '../../component/structur/skeleton';
import UserCreationForm from '../../component/user/userCreationForm';
import UserTable from '../../component/user/userTable';
import { rowsUser } from '../../utils/data';
import { useState } from 'react';
import { userStructur } from '../../states/userSlice';

function UserBoardContent() {
  const [rowsUserHook, setRowsUserHook] = useState<userStructur[]>(rowsUser);
  return (
    <SkeletonContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <UserCreationForm
                rowsUser={rowsUserHook}
                setRowsUserHook={setRowsUserHook}
              />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <UserTable rowsUser={rowsUserHook} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SkeletonContent>
  );
}

export default function UserTableCreationView() {
  return <UserBoardContent />;
}
