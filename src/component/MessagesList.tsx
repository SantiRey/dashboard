import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Typography
} from '@mui/material';
import { messageStructur } from '../states/ticketSlice';

const MessageList = ({
  messagesGiven,
}: {
  messagesGiven: messageStructur[];
}) => {
  return (
    <List>
      {messagesGiven.map(
        ({ id, author, message, timestamp }: messageStructur) => (
          <ListItem button key={id}>
            <ListItemAvatar>
              <Avatar alt={author} src={author} />
            </ListItemAvatar>
            <Typography paragraph>{message}</Typography>
            <Typography >{timestamp}</Typography>
          </ListItem>
        )
      )}
    </List>
  );
};

export default MessageList;
