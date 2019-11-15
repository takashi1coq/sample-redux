import React, { ReactElement } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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

export interface sampleTableProps {
  tableHeader: { headerName: string; headerKey: string }[]
  tableRows: { [key: string]: { data: string; color: string } }[]
}

const SampleTable: React.FC<sampleTableProps> = (props): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {props.tableHeader.map(column => (
                <TableCell>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tableRows.map(row => (
              <TableRow>
                {props.tableHeader.map(headerCell => {
                  return (
                    <TableCell style={{ backgroundColor: row[headerCell.headerKey].color }}>
                      {row[headerCell.headerKey].data}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default SampleTable
