import React, {ReactElement,} from 'react'
import {GridList, GridListTile, Box, makeStyles, Theme, createStyles, Paper} from '@material-ui/core';
import AdminPieChart from 'src/views/AdminViews/AdminPieChart';
import AssignmentIcon from '@material-ui/icons/Assignment';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(1),
      width: '100%',
      overflowX: 'auto',
      marginBottom: theme.spacing(1),
    },
    box: {
      paddingTop: '15px',
      paddingLeft: '10px',
    }
  }),
)

interface Props {
  title: string
}

const AdminCharts: React.FC<Props> = (props): ReactElement => {
  const classes = useStyles()
  const {title} = props
  return (
    <Paper className={classes.paper}>
      <Box textAlign="left" className={classes.box}><AssignmentIcon />{title}</Box>
      <GridList cols={3}>
        <GridListTile style={{ height: 'auto' }}>
          <AdminPieChart title='項目１' />
        </GridListTile>
        <GridListTile style={{ height: 'auto' }}>
          <AdminPieChart title='項目２' />
        </GridListTile>
        <GridListTile style={{ height: 'auto' }}>
          <AdminPieChart title='項目３' />
        </GridListTile>
      </GridList>
      <GridList cols={3}>
        <GridListTile style={{ height: 'auto' }}>
          <AdminPieChart title='項目４' />
        </GridListTile>
        <GridListTile style={{ height: 'auto' }}>
          <AdminPieChart title='項目５' />
        </GridListTile>
      </GridList>
    </Paper>
  )
}

export default AdminCharts
