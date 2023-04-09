import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import { messageStructur } from '../states/ticketSlice';
import * as React from 'react'
const MessageList = ({
  messagesGiven,
}: {
  messagesGiven: messageStructur[];
}) => {
  return (
    <List>
      {messagesGiven.map(
        ({ id, author, message, timestamp }: messageStructur) => (
          <>
          <ListItem button key={id}>
            <ListItemAvatar>
              <Avatar sx={{p:4, mr:3}} alt={author} src={author} />
            </ListItemAvatar>
            <ListItemText primary={author} secondary={<React.Fragment>
              <Typography
                sx={{  display:"block"}}
                component="span"
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {timestamp}
              </Typography>
                {message}
            </React.Fragment>}>
            </ListItemText>
            
          </ListItem>
          <Divider></Divider>
          </>
        )
      )}
    </List>
  );
};

export default MessageList;
