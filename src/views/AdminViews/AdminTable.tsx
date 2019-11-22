import React, {ReactElement} from 'react';
import {TableRow, TableCell, Table, TableBody, makeStyles, Theme, createStyles, Paper, TableHead, createMuiTheme} from '@material-ui/core';
import {ApiTestState} from 'src/modules/apiTest/apiTestModule';
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher';
import {useDidMount} from 'src/Wrapper';
import {ThemeProvider} from '@material-ui/core/styles';

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

const mainTheme = createMuiTheme({
  typography: {
    fontSize: 9,
  },
})

interface Props {
  value: ApiTestState
  actions: ActionDispatcher
}

const headerCell = {
  name: '国名',
  ja: '和名',
  flag: '国旗',
  alpha2Code: '国名コード2桁',
  capital: '首都',
  demonym: '住民の呼称',
  region: '領域/区域',
}

const AdminTable: React.FC<Props> = (props): ReactElement => {
  const classes = useStyles()
  const { value, actions } = props
  useDidMount(() => {
    actions.getRegion()
    actions.fetchApi('all')
  })
  return (
    <ThemeProvider theme={mainTheme}>
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2}>{headerCell.name}</TableCell>
            <TableCell>{headerCell.ja}</TableCell>
            <TableCell>{headerCell.flag}</TableCell>
            <TableCell>{headerCell.alpha2Code}</TableCell>
            <TableCell>{headerCell.alpha2Code}</TableCell>
            <TableCell>{headerCell.alpha2Code}</TableCell>
            <TableCell>{headerCell.alpha2Code}</TableCell>
            <TableCell>{headerCell.alpha2Code}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell >{headerCell.capital}</TableCell>
            <TableCell >{headerCell.demonym}</TableCell>
            <TableCell >{headerCell.region}</TableCell>
            <TableCell >{headerCell.region}</TableCell>
            <TableCell >{headerCell.region}</TableCell>
            <TableCell >{headerCell.region}</TableCell>
            <TableCell >{headerCell.region}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.resItems.map(row => (
            <>
            <TableRow key={row.name.data}>
              <TableCell rowSpan={2} style={{backgroundColor: (row.name.redF) ? 'lightpink' : '' }}>
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
              <TableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </TableCell>
              <TableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </TableCell>
              <TableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </TableCell>
              <TableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </TableCell>
            </TableRow>
            <TableRow key={row.capital.data}>
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
            </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
      </Paper>
    </div>
    </ThemeProvider>
  )
}

export default AdminTable
