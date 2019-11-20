import React, { ReactElement, useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher'
import {useDidMount} from 'src/Wrapper'
import {TableSortLabel} from '@material-ui/core'
import {ApiTestState} from 'src/modules/apiTest/apiTestModule'

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
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
)

interface HeaderCell {
  id: string
  label: string
}

const headerCell: HeaderCell[] = [
  {id: 'name', label: '国名'},
  {id: 'ja', label: '和名'},
  {id: 'flag', label: '国旗'},
  {id: 'alpha2Code', label: '国名コード2桁'},
  {id: 'capital', label: '首都'},
  {id: 'demonym', label: '住民の呼称'},
  {id: 'region', label: '領域/区域'},
  {id: 'region', label: '領域/区域'},
  {id: 'region', label: '領域/区域'},
  {id: 'region', label: '領域/区域'},
  {id: 'region', label: '領域/区域'},
  {id: 'region', label: '領域/区域'},
  {id: 'region', label: '領域/区域'},
]

interface Props {
  value: ApiTestState
  actions: ActionDispatcher
}

type Order = 'asc' | 'desc'

const CountryTable: React.FC<Props> = (props): ReactElement => {
  const classes = useStyles()
  const { value, actions } = props
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState('name');
  const changeSort = (id: string) => {
    const isDesc = orderBy === id && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(id);
  };

  // any[] 保留 StateInState[] ?
  function sortRedF(arr: any[], orderBy: string) {
    arr.sort((a, b) => {
      if (a[orderBy].redF<b[orderBy].redF) {
        return 1
      }
      if (a[orderBy].redF>b[orderBy].redF) {
        return -1
      }
      return 0
    })
    return arr
  }
  useDidMount(() => {
    actions.getRegion()
    actions.fetchApi('all')
  })
  return (
    <div className={classes.root}>
      <select defaultValue='all' onChange={(e) => actions.fetchApi(e.target.value)}>
        <option value='all'>全て</option>
        {value.resRegionItems.map((region: any) => {
          return <option value={region} key={region}>{region}</option>
        })}
      </select>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {headerCell.map(header => {
                return (
                  <TableCell
                    key={header.id}
                    sortDirection={orderBy === header.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === header.id}
                      direction={order}
                      onClick={() => changeSort(header.id)}
                    >
                      {orderBy === header.id ? (
                        <span className={classes.visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </span>
                      ) : null}
                    </TableSortLabel>
                    {header.label}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortRedF(value.resItems, orderBy).map(row => (
              <TableRow key={row.name.data}>
                <TableCell style={{backgroundColor: (row.name.redF) ? 'lightpink' : '' }}>
                  {row.name.data}
                </TableCell>
                <TableCell>
                  {row.translations.ja}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.flag.redF) ? 'lightpink' : '' }}>
                  <img src={row.flag.data} width="50" height="30" />
                </TableCell>
                <TableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                  {row.alpha2Code.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.capital.redF) ? 'lightpink' : '' }}>
                  {row.capital.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.demonym.redF) ? 'lightpink' : '' }}>
                  {row.demonym.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                  {row.region.data}/{row.subregion.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                  {row.region.data}/{row.subregion.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                  {row.region.data}/{row.subregion.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                  {row.region.data}/{row.subregion.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                  {row.region.data}/{row.subregion.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                  {row.region.data}/{row.subregion.data}
                </TableCell>
                <TableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                  {row.region.data}/{row.subregion.data}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default CountryTable
