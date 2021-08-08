import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks5Icon from '@material-ui/icons/Looks5';
import Looks6Icon from '@material-ui/icons/Looks6';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Box, Paper, Typography } from '@material-ui/core';

export const ScheduleList = () => {

  return (
    <Box my={3} id="link3">
      <Box mb={3}>
        <Typography component="h6" variant="h6" color="secondary">スケジュール</Typography>
      </Box>
      <Paper style={{ color: "white" }}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LooksOneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="大会OP" secondary="19:00-19:10" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LooksTwoIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="代表挨拶" secondary="19:10-19:20" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Looks3Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="メンバー紹介" secondary="19:20-20:00" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Looks4Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="クリエイティブバトル" secondary="20:00-21:00" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="小休憩" secondary="21:00-21:10" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Looks5Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="授賞式" secondary="21:10-21:30" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}