import { Box, Button, Paper, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';
import { userStructur } from '../../../states/userSlice';
import Title from '../../structur/title';
import { rowsUser as rowsUserGlobal } from '../../../utils/data';
export default function UserCreationForm({
  rowsUser,
  setRowsUserHook,
}: {
  rowsUser: userStructur[];
  setRowsUserHook: React.Dispatch<React.SetStateAction<userStructur[]>>;
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userToSave: userStructur = {
      email: data.get('email') as string,
      role: data.get('role') as string,
      token: data.get('token') as string,
      userName: data.get('userName') as string,
    };
    const userMock = {
      ...userToSave,
      id: uuidv4() + '',
    };
    setRowsUserHook(rowsUser.concat(userMock));
    rowsUserGlobal.push(userMock);
  };
  const handleChange = () => {
    console.log();
  };
  /* const createTicket = useCreateTicket();

  const handleChange = (event: {
    preventDefault: () => void;
    target: { name: string; value: string | [] };
  }) => {
    event.preventDefault();
    setTicketToCreate((prev) => {
      return {
        ...prev,
        [event.target.name]:
          event.target.name === 'messages'
            ? [event.target.value]
            : event.target.value,
      };
    });
  };

  const [ticketToCreate, setTicketToCreate] =
    useState<ticketStructur>(initialStateTicket);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const messageGiven: messageStructur = {
      id: uuidv4(),
      user: data.get('userName') as string,
      data: data.get('messages') as string,
    };
    const ticketToSave: ticketStructur = {
      id: uuidv4(),
      application: data.get('application') as string,
      creationDate: new Date().toUTCString(),
      description: data.get('description') as string,
      lastContact: new Date().toUTCString(),
      messages: [messageGiven],
      status: 'Open',
      techSupport: 'Not selected',
      title: data.get('ticketTitle') as string,
      user: data.get('userName') as string,
    };

    const response = await createTicket(ticketToSave).then((res) => res.json()); 
  };*/
  return (
    <Box
      component="form"
      onSubmit={(event) => handleSubmit(event)}
      noValidate
      sx={{ mt: 1 }}
    >
      <>
        <Title>Create User</Title>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              id="userName"
              name="userName"
              label="User Name"
              fullWidth
              autoComplete="userName"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="role"
              name="role"
              label="Role"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          create ticket
        </Button>
      </>
    </Box>
  );
}
