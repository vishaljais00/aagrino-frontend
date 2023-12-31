import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


interface IReview {
    src: string;
    review: string;
    username: string;
}

const UserReview: React.FC<IReview> = ({ src = 'https://i.pinimg.com/236x/4e/2b/88/4e2b88baa1d41926a23b05180456fb56.jpg', review = '— Ill be in your neighborhood doing errands this…' , username='' }) => {
  return (
    <List sx={{ width: '100%', bgcolor: '#f0f0f0' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={src} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {review}
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     
    </List>
  );
}

export default UserReview;