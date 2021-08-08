import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AlbumIcon from '@material-ui/icons/Album';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { HashLink } from 'react-router-hash-link';
import { Box, IconButton, Typography } from '@material-ui/core';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLinkIcon } from './HashLinkIcon';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export const PageJumpNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BrowserRouter>
      <Box display="flex" justifyContent="center">
        <HashLinkIcon
          path="#link1"
          title="大会概要"
          icon={<AlbumIcon fontSize="large" />} />
        <HashLinkIcon
          path="#link2"
          title="ルール"
          icon={<DescriptionOutlinedIcon fontSize="large" />} />
        <HashLinkIcon
          path="#link3"
          title="スケジュール"
          icon={<ScheduleIcon fontSize="large" />} />
        <HashLinkIcon
          path="#link4"
          title="メンバー"
          icon={<PeopleAltIcon fontSize="large" />} />
      </Box>
    </BrowserRouter>
  );
}
