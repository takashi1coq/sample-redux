import React, {ReactElement} from 'react';
import {TableRow, TableCell, Table, TableBody, makeStyles, Theme, createStyles, TableHead, createMuiTheme, Card, CardHeader, Avatar, CardContent, withStyles} from '@material-ui/core';
import {ApiTestState} from 'src/modules/apiTest/apiTestModule';
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher';
import {useDidMount} from 'src/Wrapper';
import {ThemeProvider} from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import blueGrey from '@material-ui/core/colors/blueGrey';

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
    bigAvatar: {
      width: 50,
      height: 50,
      backgroundColor: '#F0F',
    },
    cardHeader: {
      marginBottom: '-20px',
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


const BodyTableCell = withStyles(() =>
  createStyles({
    root: {
      padding: '5px'
    },
  }),
)(TableCell);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '5px'
    },
    head: {
      backgroundColor: blueGrey[500],
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

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
    <div className={classes.root}>
          {value.resRegionItems.map(name => {
            return (
    <Card className={classes.paper}>
    <CardHeader
      className={classes.cardHeader}
      title={name + '  (領域ごとに表示)'}
      avatar={
        <Avatar variant="rounded" className={classes.bigAvatar}>
          <AssignmentIcon />
        </Avatar>
      }
    />
    <CardContent>
    <ThemeProvider theme={mainTheme}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell rowSpan={2}>{headerCell.flag}</StyledTableCell>
            <StyledTableCell>{headerCell.name}</StyledTableCell>
            <StyledTableCell>{headerCell.ja}</StyledTableCell>
            <StyledTableCell>{headerCell.alpha2Code}</StyledTableCell>
            <StyledTableCell>{headerCell.alpha2Code}</StyledTableCell>
            <StyledTableCell>{headerCell.alpha2Code}</StyledTableCell>
            <StyledTableCell>{headerCell.alpha2Code}</StyledTableCell>
            <StyledTableCell>{headerCell.alpha2Code}</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell >{headerCell.capital}</StyledTableCell>
            <StyledTableCell >{headerCell.demonym}</StyledTableCell>
            <StyledTableCell >{headerCell.region}</StyledTableCell>
            <StyledTableCell >{headerCell.region}</StyledTableCell>
            <StyledTableCell >{headerCell.region}</StyledTableCell>
            <StyledTableCell >{headerCell.region}</StyledTableCell>
            <StyledTableCell >{headerCell.region}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {value.resItems.filter(x => x.region.data === name).map(row => {
              return (
                <>
            <TableRow key={row.name.data}>
              <BodyTableCell rowSpan={2} style={{ backgroundColor: (row.flag.redF) ? 'lightpink' : '' }}>
                <img src={row.flag.data} width="50" height="30" />
              </BodyTableCell>
              <BodyTableCell style={{backgroundColor: (row.name.redF) ? 'lightpink' : '' }}>
                {row.name.data}
              </BodyTableCell>
              <BodyTableCell>
                {row.translations.ja}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.alpha2Code.redF) ? 'lightpink' : '' }}>
                {row.alpha2Code.data}
              </BodyTableCell>
            </TableRow>
            <TableRow key={row.capital.data}>
              <BodyTableCell style={{ backgroundColor: (row.capital.redF) ? 'lightpink' : '' }}>
                {row.capital.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.demonym.redF) ? 'lightpink' : '' }}>
                {row.demonym.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                {row.region.data}/{row.subregion.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                {row.region.data}/{row.subregion.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                {row.region.data}/{row.subregion.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                {row.region.data}/{row.subregion.data}
              </BodyTableCell>
              <BodyTableCell style={{ backgroundColor: (row.region.redF) ? 'lightpink' : '' }}>
                {row.region.data}/{row.subregion.data}
              </BodyTableCell>
            </TableRow>
                </>
              )
          })}
        </TableBody>
      </Table>
    </ThemeProvider>
    </CardContent>
    </Card>
            )
          })}
    </div>
  )
}

export default AdminTable

