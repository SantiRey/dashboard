import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import Dashboard from "../view/DashBoard";
import UserBoard from "../view/UserBoard";
import TicketCreationView from "../view/TicketCreationView";
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
    }
  ]);

