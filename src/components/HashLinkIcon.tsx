import { Box, IconButton, Typography } from "@material-ui/core"
import React from "react"
import { HashLink } from "react-router-hash-link"

export const HashLinkIcon = (props: { icon: any, path: string, title: string }) => {
  return (
    <Box mx={1}>
      <HashLink smooth to={props.path} style={{ textDecoration: 'none', color: '#FFF' }}>
        <Box justifyContent="center" alignItems="center">
          <IconButton>
            {props.icon}
          </IconButton>
          <Typography>{props.title}</Typography>
        </Box>
      </HashLink>
    </Box>
  )
}