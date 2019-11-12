import React, { ReactElement } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import testRows from './data'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      marginTop: theme.spacing(1),
      width: '100%',
      overflowX: 'auto',
      marginBottom: theme.spacing(1),
    },
    table: {
      minWidth: 650,
    },
  }),
)

const SampleTable: React.FC = (): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testRows.map(row => (
              <TableRow key={row.title.data}>
                <TableCell component="th" scope="row" style={{ backgroundColor: row.title.color }}>
                  {row.title.data}
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: row.calories.color }}>
                  {row.calories.data}
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: row.fat.color }}>
                  {row.fat.data}
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: row.carbs.color }}>
                  {row.carbs.data}
                </TableCell>
                <TableCell align="right" style={{ backgroundColor: row.protein.color }}>
                  {row.protein.data}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default SampleTable
