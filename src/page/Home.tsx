import React from 'react';
import TopImage from './../images/top.jpg';
import { Card, Container, CardMedia, CardContent, Typography, AppBar, Tabs, Tab, Box } from '@material-ui/core';
import { SummaryCard } from '../components/SummaryCard';
import { PageJumpNavigation } from '../components/PageJumpNavigation';
import { ScheduleList } from '../components/ScheduleList';
import { RuleCard } from '../components/RuleCard';
import { MemberCard } from '../components/MemberCard';

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Card >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image={TopImage}
          title="Contemplative Reptile"
        />
      </Card>
      <Container maxWidth="lg">
        <PageJumpNavigation />
        <SummaryCard />
        <RuleCard />
        <ScheduleList />
        <MemberCard />
      </Container>
    </React.Fragment>
  )
}

