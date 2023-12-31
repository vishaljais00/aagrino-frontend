import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


interface IReview {
    review: string;
    user: {
      profile: {
        profilePic: string
      },
      name: string
    }
}

const UserReview: React.FC<IReview> = ({ review = '— Ill be in your neighborhood doing errands this…' , user }) => {
  return (
    <List sx={{ width: '100%', bgcolor: '#f0f0f0' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={user?.profile?.profilePic} />
        </ListItemAvatar>
        <ListItemText
          primary={user?.name}
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