import React from 'react';
import Typography from '@material-ui/core/Typography';
import MaruoImage from './../images/Maruo.jpg';
import ShotaroImage from './../images/Shotaro.jpg';
import AbeImage from './../images/Abe.jpg';
import TsuruImage from './../images/Tsuru.jpg';
import YuyaImage from './../images/Yuya.jpg';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Divider, GridList, GridListTile } from '@material-ui/core';

export const MemberCard = () => {

  return (
    <React.Fragment>
      <Box mb={3} id="link4">
        <Typography component="h6" variant="h6" color="secondary">メンバー紹介</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        <MemberCardFormat
          image={ShotaroImage}
          name="ショットA"
          text="リーダー。海と陸を制したので、現在空を制している途中。" />
        <MemberCardFormat
          image={MaruoImage}
          name="四面楚歌 a.k.a 鷹（ファルコン）"
          text="突如現れた天才ハッカーラッパー。" />
        <MemberCardFormat
          image={AbeImage}
          name="マース"
          text="伯方島の創造神「マース」。絶対的な音楽センスとお笑いセンスを持ち合わせる。" />
        <MemberCardFormat
          image={TsuruImage}
          name="ダンプ"
          text="群馬の新星「ダンプ」イメージカラーは黄色。好きな食べ物は女。" />
        <MemberCardFormat
          image={YuyaImage}
          name="ドットパンダ"
          text="サイコ・パス・パン・ダ・ヴィンチ。ニヒルを愛しニヒルに愛された男。" />
      </Box>
    </React.Fragment>
  );
}
const MemberCardFormat = (props: { image: any, name: string, text: string }) => {
  return (
    <Box m={1} flexWrap="wrap">
      <Card style={{ width: "320px" }}>
        <CardMedia
          component="img"
          height="180"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
