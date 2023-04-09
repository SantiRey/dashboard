import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { userStructur } from '../../../states/userSlice';
import { useSingleRowUser } from '../../../utils/data';

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

export default function UserCard() {
  const { userId } = useParams();
  const getSingleRow = useSingleRowUser();
  const row: userStructur = getSingleRow(userId);
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
          <Avatar sx={{ bgcolor: red[300], p: 4 }} aria-label="recipe">
            {row.userName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={row.userName}
        subheader={row.role}
      />

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
    </Paper>
  );
}
/**
 *      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <MessageList messagesGiven={row.email} />
        </CardContent>
      </Collapse>
 */
