import React from 'react';
import Typography from '@material-ui/core/Typography';
import MusicEventImage from './../images/music_event.jpg';
import { Box, Button, Divider, GridList, GridListTile } from '@material-ui/core';

export const SummaryCard = () => {

  return (
    <Box my={3} id="link1">
      <Box mb={3}>
        <Typography component="h6" variant="h6" color="secondary">イベント概要</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        <Box width="350px">
          <img style={{ width: "350px" }} src={MusicEventImage} />
        </Box>
        <Box>
          <Box mb={1}>
            <Typography variant="body2">
              クリエイティブ１グランプリは、クリエイティブに目覚めた５人の参加者の誰が一番クリエイティブかを競うイベントです。
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body2">
              参加者は、「Music」、「Art」、「Logo」の３つの部門でクリエイティブを競います。それぞれの優勝者と総合優勝者を決めます。
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body2">
              配信日時：2021年3月22日（日）19:00〜
            </Typography>
            <Typography variant="body2">
              配信場所：Cocodalienチャンネルでオンライン配信
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  );
}
