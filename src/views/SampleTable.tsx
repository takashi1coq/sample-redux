import React, { ReactElement } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { testRows, testColumns } from './data'

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
              {testColumns.map(column => (
                <TableCell>{column.data}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {testRows.map(row => (
              <TableRow>
                {row.map(data => (
                  <TableCell align="right" style={{ backgroundColor: data.color }}>
                    {data.data}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default SampleTable
