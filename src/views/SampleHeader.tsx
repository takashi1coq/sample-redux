import React, { ReactElement } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Toolbar, Typography, Link } from '@material-ui/core'

const HEADER_CONST: {
  readonly title: string
  readonly linkOne: string
  readonly linkTwo: string
} = {
  title: 'Sample Redux',
  linkOne: 'カウンターコンテナへ',
  linkTwo: 'その他コンテナへ',
}

const HEADER_LINK: {
  readonly linkOne: string
  readonly linkTwo: string
} = {
  linkOne: './counter',
  linkTwo: './example',
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      borderBottom: `2px solid ${theme.palette.divider}`,
      zIndex: theme.zIndex.drawer + 1,
    },
    root: {
      flexGrow: 1,
      padding: '10px',
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  }),
)

const SampleHeader: React.FC = (): ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {HEADER_CONST.title}
          </Typography>
          <nav>
            <Link
              variant="button"
              color="inherit"
              href={HEADER_LINK.linkOne}
              className={classes.link}
            >
              {HEADER_CONST.linkOne}
            </Link>
            <Link
              variant="button"
              color="inherit"
              href={HEADER_LINK.linkTwo}
              className={classes.link}
            >
              {HEADER_CONST.linkTwo}
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default SampleHeader
