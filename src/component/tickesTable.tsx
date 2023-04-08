import { Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import Title from './title';
import { rowsTickes } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import { ticketStructur } from '../states/ticketSlice';

export default function TickesTable() {
  /*const [rowsTickes, setRowTickets] = React.useState<ticketStructur[]>([])

  const getAllTickes = useGetAllTickets()
  React.useEffect(()=>{
    requestTickets()
  },[])

  const requestTickets = async ()=>{
    const newTicketsRow = await getAllTickes().then(res=>res.json());
    setRowTickets(newTicketsRow['data']);
  }*/
  const navigate = useNavigate();
  const ticketSelected = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, row: ticketStructur) => {
    event.preventDefault();
    navigate(`../ticket/${row.id}`, { replace: true });
  };

  return (
    <React.Fragment>
      <Title>Recent Tickets</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Assignate</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>State</TableCell>
            <TableCell align="center">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTickes.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.creationDate}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.assignation}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="center">
                <Chip
                  label="more"
                  component="a"
                  href="#basic-chip"
                  color="primary"
                  variant="outlined"
                  clickable
                  onClick={(event) => ticketSelected(event, row)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
