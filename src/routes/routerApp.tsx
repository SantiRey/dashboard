import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import Dashboard from "../view/DashBoard";
import UserBoard from "../view/UserBoard";
import TicketCreationView from "../view/TicketCreationView";
import TicketView from "../view/TicketView";


export const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
    {
      path: "/users",
      element: <UserBoard/>,
    },
    {
      path: "/create",
      element: <App/>,
    },
    {
      path: "/ticket/creation",
      element: <TicketCreationView></TicketCreationView>
    },
    {
      path: "/ticket/:ticketId",
      element: <TicketView></TicketView>
    }
  ]);

