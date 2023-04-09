import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Title from '../../structur/title';
import React, { useState } from 'react';
import { rowsTickes, rowsUser } from '../../../utils/data';
import { ticketStructur } from '../../../states/ticketSlice';
import { v4 as uuidv4 } from 'uuid';

export default function TicketCreationForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ticketToSave: ticketStructur = {
      tier: data.get('tier') as string,
      assignation: data.get('assignation') as string,
      creationDate: new Date() + '',
      description: data.get('description') as string,
      id: uuidv4(),
      message: data.get('messages')
        ? [
            {
              id: uuidv4(),
              message: data.get('messages') as string,
              author: 'Ines',
              timestamp: new Date().getUTCDate() + '',
            },
          ]
        : [],
      status: 'Open',
      title: data.get('title') as string,
    };
    rowsTickes.push(ticketToSave);
  };
  const [username, setUserName] = useState('');
  const handleChange = () => {
    console.log;
  };
  const handleAsignation = (event: SelectChangeEvent) => {
    event.preventDefault();
    setUserName(event.target.value as string);
  };
  /* const createTicket = useCreateTicket();

  const initialStateTicket = {
    application: '',
    id: '',
    creationDate: '',
    description: '',
    lastContact: '',
    messages: [],
    status: '',
    techSupport: '',
    title: '',
    user: '',
  };

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
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <>
        <Title>Create a Tickets</Title>
        {}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="tier"
              name="tier"
              label="Tier"
              fullWidth
              autoComplete="tier"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="tile"
              name="title"
              label="Ticket Title"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Ticket Description"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="messages"
              name="messages"
              label="Information"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">Assignation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={username}
                label="assignation"
                name="assignation"
                onChange={handleAsignation}
              >
                {rowsUser.map((user) => {
                  return (
                    <MenuItem value={user.email} key={user.email}>
                      {user.userName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
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
