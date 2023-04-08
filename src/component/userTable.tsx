import { Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import title from './title';
import { rowsUser } from '../utils/data';

export default function UserTable() {
  /*const [rowsTickes, setRowTickets] = React.useState<ticketStructur[]>([])
  const navigate = useNavigate();
  const getAllTickes = useGetAllTickets()
  React.useEffect(()=>{
    requestTickets()
  },[])

  const requestTickets = async ()=>{
    const newTicketsRow = await getAllTickes().then(res=>res.json());
    setRowTickets(newTicketsRow['data']);
  }*/

  const ticketSelected = (event: any, row: any) => {
    //event.preventDefault();
    //navigate(`../ticket/${row.id}`, { replace: true });
  };

  return (
    <React.Fragment>
      <title>Users Table</title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="center">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsUser.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="center">
                <Chip
                  label="more"
                  component="a"
                  href="#basic-chip"
                  color="primary"
                  variant="outlined"
                  clickable
                  onClick={(event: any) => ticketSelected(event, row)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
