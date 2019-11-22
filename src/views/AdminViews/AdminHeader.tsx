import React, { ReactElement } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Toolbar, Typography } from '@material-ui/core'

enum HEADER_CONST {
  title = 'Sample board',
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
    title: {
      flexGrow: 1,
    },
    toolbar: {
      flexWrap: 'wrap',
      minHeight: '50px',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
  }),
)

const AdminHeader: React.FC = (): ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {HEADER_CONST.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AdminHeader
