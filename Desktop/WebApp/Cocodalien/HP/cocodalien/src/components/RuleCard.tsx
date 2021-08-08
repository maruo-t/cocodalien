import React from 'react';
import Typography from '@material-ui/core/Typography';
import PianoImage from './../images/music_event.jpg';
import { Box, Button, Divider, GridList, GridListTile } from '@material-ui/core';

export const RuleCard = () => {

    return (
        <Box my={3} id="link2">
            <Box mb={3}>
                <Typography component="h6" variant="h6" color="secondary">ルール説明</Typography>
            </Box>
            <Box mb={3}>
                <Typography variant="body2">
                    「Music」、「Art」、「logo」の順に発表をおこないます。発表順は当日くじで決まった順番で発表します。まずは作品を披露して第一印象のみで点数投票をおこないます。続いて作成者からの解説をおこない、もう一度点数投票を行います。２つの得点を合算した得点で競い合います。
                    </Typography>
            </Box>
        </Box>
    );
}
