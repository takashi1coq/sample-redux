import React, { ReactElement} from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { ApiTestState } from 'src/modules/apiTest/apiTestModule'
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher'
import {
  NameCell,
  Alpha2CodeCell,
  CapitalCell,
  DemonymCell,
  SubregionCell,
} from 'src/views/CountrySearch/Cells'
import {useDidMount} from 'src/Wrapper'

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

enum countryTableHeader {
  NAME = '国名',
  ALPHA2CODE = '国名コード2桁',
  CAPITAL = '首都',
  DEMONYM = '住民の呼称',
  SUBREGION = '大陸（サブリージョン）',
}

interface Props {
  value: ApiTestState
  actions: ActionDispatcher
}

const CountryTable: React.FC<Props> = (props): ReactElement => {
  const classes = useStyles()
  const { value, actions } = props
  useDidMount(() => {
    actions.fetchApi()
  })
  return (
    <div className={classes.root}>
      <button type="button" onClick={() => actions.fetchApi()}>
        saga test
      </button>
      <select defaultValue='all'>
        <option value='all'>全て</option>
        {value.resItems.map(select => {
          return <option value={select.name} key={select.name}>{select.name}</option>
        })}
      </select>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>{countryTableHeader.NAME}</TableCell>
              <TableCell>{countryTableHeader.ALPHA2CODE}</TableCell>
              <TableCell>{countryTableHeader.CAPITAL}</TableCell>
              <TableCell>{countryTableHeader.DEMONYM}</TableCell>
              <TableCell>{countryTableHeader.SUBREGION}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value.resItems.map(row => (
              <TableRow key={row.name}>
                <NameCell value={row.name} />
                <Alpha2CodeCell value={row.alpha2Code} />
                <CapitalCell value={row.capital} />
                <DemonymCell value={row.demonym} />
                <SubregionCell value={row.subregion} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default CountryTable
