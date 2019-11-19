import React, { ReactElement } from 'react'
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
  FlagCell,
  RegionCell,
  TranslationsCell,
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
  JA = '和名',
  FLAG = '国旗',
  ALPHA2CODE = '国名コード2桁',
  CAPITAL = '首都',
  DEMONYM = '住民の呼称',
  REGION = '領域/区域',
}

interface Props {
  value: ApiTestState
  actions: ActionDispatcher
}

const CountryTable: React.FC<Props> = (props): ReactElement => {
  const classes = useStyles()
  const { value, actions } = props
  useDidMount(() => {
    actions.getRegion()
    actions.fetchApi('all')
  })
  return (
    <div className={classes.root}>
      <select defaultValue='all' onChange={(e) => actions.fetchApi(e.target.value)}>
        <option value='all'>全て</option>
        {value.resRegionItems.map(region => {
          return <option value={region} key={region}>{region}</option>
        })}
      </select>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>{countryTableHeader.NAME}</TableCell>
              <TableCell>{countryTableHeader.JA}</TableCell>
              <TableCell>{countryTableHeader.FLAG}</TableCell>
              <TableCell>{countryTableHeader.ALPHA2CODE}</TableCell>
              <TableCell>{countryTableHeader.CAPITAL}</TableCell>
              <TableCell>{countryTableHeader.DEMONYM}</TableCell>
              <TableCell>{countryTableHeader.REGION}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value.resItems.map(row => (
              <TableRow key={row.name}>
                <NameCell value={row.name} />
                <TranslationsCell value={row.translations.ja} />
                <FlagCell value={row.flag} />
                <Alpha2CodeCell value={row.alpha2Code} />
                <CapitalCell value={row.capital} />
                <DemonymCell value={row.demonym} />
                <RegionCell region={row.region} subregion={row.subregion} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default CountryTable
