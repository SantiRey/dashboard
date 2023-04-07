import { messageStruct } from '../states/ticketSlice';

function createUser(id: string, name: string, email: string, role?: string) {
  return {
    id,
    name,
    email,
    role,
  };
}

const rowsUser = [
  createUser('1', 'John Doe', 'john.doe@example.com', 'admin'),
  createUser('2', 'Jane Doe', 'jane.doe@example.com', 'user'),
  createUser('3', 'Bob Smith', 'bob.smith@example.com'),
  createUser('4', 'Trixi Smith', 't.smith@example.com'),
];
//TICKETS

// Generate Order Data
function createData(
  id: string,
  creationDate: string,
  title: string,
  description: string,
  assignation: string,
  status: string,
  message: messageStruct[]
) {
  return {
    id,
    creationDate,
    title,
    description,
    assignation,
    status,
    message,
  };
}
const rowsTickes = [
  createData(
    '1',
    '2022-04-07',
    'Tarea 1',
    'Descripción de la tarea 1',
    'Persona asignada 1',
    'En progreso',
    []
  ),
  createData(
    '2',
    '2022-04-08',
    'Tarea 2',
    'Descripción de la tarea 2',
    'Persona asignada 2',
    'Pendiente',
    []
  ),
  createData(
    '3',
    '2022-04-09',
    'Tarea 3',
    'Descripción de la tarea 3',
    'Persona asignada 3',
    'Completada',
    [
      {
        id: '1',
        author: 'Usuario 1',
        message: 'Mensaje 1',
        timestamp: '2022-04-10',
      },
      {
        id: '2',
        author: 'Usuario 2',
        message: 'Mensaje 2',
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
    'Completada',
    [
      {
        id: '1',
        author: 'Usuario 1',
        message: 'Mensaje 1',
        timestamp: '2022-04-10',
      },
      {
        id: '2',
        author: 'Usuario 2',
        message: 'Mensaje 2',
        timestamp: '2022-04-11',
      },
    ]
  ),
];

export { rowsTickes, rowsUser};
