import { messageStructur, ticketStructur } from '../states/ticketSlice';
// USERS

function createUser(
  id: string,
  userName: string,
  email: string,
  role: string,
  token: string
) {
  return {
    id,
    userName,
    email,
    role,
    token,
  };
}

const rowsUser = [
  createUser('1', 'John Doe', 'john.doe@example.com', 'admin', 'token'),
  createUser('2', 'Jane Doe', 'jane.doe@example.com', 'user', 'token'),
  createUser('3', 'Bob Smith', 'bob.smith@example.com', 'developer', 'token'),
  createUser('4', 'Trixi Smith', 't.smith@example.com', 'developer', 'token'),
];

export const useSingleRowUser = () => (int: string | undefined) => {
  return rowsUser.filter((row) => row.id == int + '')[0];
};

//TICKETS

// Generate Order Data
function createData(
  id: string,
  creationDate: string,
  title: string,
  description: string,
  assignation: string,
  status: string,
  tier: string,
  message: messageStructur[]
) {
  return {
    id,
    creationDate,
    title,
    description,
    assignation,
    status,
    tier,
    message,
  };
}
const rowsTickes = [
  createData(
    '5',
    '2022-04-07',
    'Tarea 1',
    'Descripción de la tarea 1',
    'Persona asignada 1',
    'In Progress',
    'Development',
    []
  ),
  createData(
    '1',
    '2022-04-07',
    'Tarea 1',
    'Descripción de la tarea 1',
    'Persona asignada 1',
    'Open',
    'Development',
    []
  ),
  createData(
    '2',
    '2022-04-08',
    'Tarea 2',
    'Descripción de la tarea 2',
    'Persona asignada 2',
    'In Progress',
    'Team',
    []
  ),
  createData(
    '3',
    '2022-04-09',
    'Tarea 3',
    'Descripción de la tarea 3',
    'Persona asignada 3',
    'Open',
    'Development',
    [
      {
        id: '1',
        author: 'Usuario 1',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ultricies ipsum, nec euismod nisl convallis quis. Vestibulum condimentum augue id mollis congue. Suspendisse non sem in lorem hendrerit vehicula a non ligula. Vestibulum euismod pellentesque erat, sed vestibulum nunc bibendum in. Donec aliquet auctor lacus a rutrum. Sed feugiat dolor vitae ante bibendum, eget fermentum odio pellentesque. Donec tristique erat in est sodales viverra. ',
        timestamp: '2022-04-10',
      },
      {
        id: '2',
        author: 'Usuario 2',
        message:
          'Suspendisse potenti. Maecenas gravida libero sed justo dapibus feugiat. Nam volutpat lacus ac ipsum accumsan, vel ultrices massa suscipit. Integer pretium, enim vel mattis eleifend, dolor magna euismod neque, eu hendrerit justo turpis id quam. Nam non nisl mauris. Duis porttitor leo et nulla scelerisque, ut ultrices quam hendrerit. Proin convallis ante quis sem feugiat aliquet. Etiam semper, magna vitae hendrerit congue, enim tortor molestie dui, sed convallis',
        timestamp: '2022-04-11',
      },
    ]
  ),
  createData(
    '4',
    '2022-04-09',
    'Tarea 4',
    'Descripción de la tarea 3',
    'Persona asignada 4',
    'In Progress',
    'Team',
    [
      {
        id: '1',
        author: 'Usuario 1',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ultricies ipsum, nec euismod nisl convallis quis. Vestibulum condimentum augue id mollis congue. Suspendisse non sem in lorem hendrerit vehicula a non ligula. Vestibulum euismod pellentesque erat, sed vestibulum nunc bibendum in. Donec aliquet auctor lacus a rutrum. Sed feugiat dolor vitae ante bibendum, eget fermentum odio pellentesque. Donec tristique erat in est sodales viverra. ',
        timestamp: '2022-04-10',
      },
      {
        id: '2',
        author: 'Usuario 2',
        message:
          'Suspendisse potenti. Maecenas gravida libero sed justo dapibus feugiat. Nam volutpat lacus ac ipsum accumsan, vel ultrices massa suscipit. Integer pretium, enim vel mattis eleifend, dolor magna euismod neque, eu hendrerit justo turpis id quam. Nam non nisl mauris. Duis porttitor leo et nulla scelerisque, ut ultrices quam hendrerit. Proin convallis ante quis sem feugiat aliquet. Etiam semper, magna vitae hendrerit congue, enim tortor molestie dui, sed convallis',
        timestamp: '2022-04-11',
      },
    ]
  ),
];

//FUNTIONS

export const useSingleRowTicket = () => (int: string | undefined) => {
  return rowsTickes.filter((row) => row.id == int + '')[0];
};
export const useGetTicketByStatus = () => {
  const f = (status: string) => {
    return rowsTickes.filter((row) => row.status == status);
  };
  return {
    getOpen: f('Open'),
    getInProgress: f('In Progress'),
  };
};

export const useGetTicketByTier = () => {
  const f = (tier: string) => {
    return rowsTickes.filter((row) => row.tier == tier);
  };
  return {
    getOpen: f('Open'),
    getInProgress: f('In Progress'),
  };
};

export const useGetTiers = () => {
  return () => {
    const tiers = new Set(rowsTickes.map((row) => row.tier));
    return tiers;
  };
};

export const useGetTiersCount = () => {
  return () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const count = [...useGetTiers()()].map(tier => rowsTickes.reduce((acc, row) => {
      return row.tier==tier? acc+1: acc
    }, 0))
    return count;
  };
};

export { rowsTickes, rowsUser };
