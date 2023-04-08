import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
import { Divider, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useSingleRow } from '../utils/data';
import MessageList from './MessagesList';
import { ticketStructur } from '../states/ticketSlice';
import { useParams } from 'react-router-dom';
import * as React from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TicketCard() {
  const { ticketId } = useParams();
  const getSingleRow = useSingleRow();
  const row: ticketStructur = getSingleRow(ticketId);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 /* const ticket: ticketStructur = {
    id: '',
    assignation:'',
    creationDate:'',
    description:'',
    message:[],
    status:'',
    title:''
  }
  const handleGetTicket = async ()=>{
    const row = await getTicketById(ticketId+"").then(res=>res.json());    
    setRow(row);
  }

  const getTicketById =  useGetTicketByID();

  const [row, setRow] = React.useState<ticketStructur>(ticket);

  const { ticketId } = useParams();

  React.useEffect(() => {
    handleGetTicket()
  }, []);

  */
  return (
    <Paper elevation={0} sx={{ maxWidth: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[300], padding: 3 }} aria-label="recipe">
            {row.assignation[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={row.assignation}
        subheader={row.creationDate}
      />

      <CardContent>
        <Typography variant="subtitle2" color="text.primary">
          Description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {row.description}
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="subtitle2" color="text.primary">
          Status
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {row.status}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <RemoveRedEyeIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <MessageList messagesGiven={row.message}/>
        </CardContent>
      </Collapse>
    </Paper>
  );
}

