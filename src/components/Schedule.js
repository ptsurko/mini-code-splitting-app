import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const Schedule = () => (
  <List>
    <ListItem>
      <Avatar>
        <ImageIcon />
      </Avatar>
      <ListItemText primary="Photos" secondary="Jan 9, 2014" />
    </ListItem>
    <ListItem>
      <Avatar>
        <WorkIcon />
      </Avatar>
      <ListItemText primary="Work" secondary="Jan 7, 2014" />
    </ListItem>
    <ListItem>
      <Avatar>
        <BeachAccessIcon />
      </Avatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
    <ListItem>
      <Avatar>
        <BeachAccessIcon />
      </Avatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
    <ListItem>
      <Avatar>
        <BeachAccessIcon />
      </Avatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
  </List>
)

export default Schedule
