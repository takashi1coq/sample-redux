import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import {Toolbar, Typography, Link } from '@material-ui/core'

// 内部用のつもりだがなんとなくexportしている
namespace headerConst {
    export const TITLE = 'Sample Redux'
    export const LINK_ONE = 'カウンターコンテナーへ'
    export const LINK_TWO = 'これから作るコンテナーへ'
}
// リンク (もう少し考える)
namespace headerLink {
    export const LINK_ONE = './counter'
    export const LINK_TWO = './example'
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  appBar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    zIndex: theme.zIndex.drawer + 1,
  },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
);

export function Header () {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <AppBar position="fixed" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {headerConst.TITLE}
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href={headerLink.LINK_ONE} className={classes.link}>
                {headerConst.LINK_ONE}
            </Link>
            <Link variant="button" color="textPrimary" href={headerLink.LINK_TWO} className={classes.link}>
                {headerConst.LINK_TWO}
            </Link>
          </nav>
        </Toolbar>
        </AppBar>
        </div>
    )
}
