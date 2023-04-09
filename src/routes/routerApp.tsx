import { createBrowserRouter } from 'react-router-dom';
import AssingView from '../view/AsignView';
import Dashboard from '../view/DashBoard';
import TicketCreationView from '../view/TicketCreationView';
import TicketView from '../view/TicketView';
import UserBoard from '../view/UserTableCreationView';
import UserView from '../view/UserView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/users',
    element: <UserBoard />,
  },
  {
    path: '/ticket/creation',
    element: <TicketCreationView></TicketCreationView>,
  },
  {
    path: '/ticket/:ticketId',
    element: <TicketView></TicketView>,
  },
  {
    path: '/user/:userId',
    element: <UserView></UserView>,
  },
  {
    path: '/assign',
    element: <AssingView></AssingView>,
  },
]);
