import React, { ReactElement } from 'react'
import H from 'history'
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { cyan } from '@material-ui/core/colors'
import { Container, Grid } from '@material-ui/core'
import AdminHeader from 'src/views/AdminViews/AdminHeader'
import AdminBreadcrumb from 'src/views/AdminViews/AdminBreadcrumb'
import ApiTestContainer from 'src/containers/apiTest/Container'
import AdminCharts from 'src/views/AdminViews/AdminCharts'
import AdminCheckSearch from 'src/views/AdminViews/AdminCheckSearch'

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: cyan,
  },
  typography: {
    fontSize: 13,
  },
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(4),
      // フッター用パディング
      //      paddingBottom: theme.spacing(4),
    },
  }),
)


export interface Props {
  history: H.History
}

const AdminMain: React.FC<Props> = (props): ReactElement => {
  const {history} = props
  const classes = useStyles()
  return (
    <ThemeProvider theme={mainTheme}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AdminHeader />
          </Grid>
          <Grid item xs={12}>
            <AdminBreadcrumb history={history} />
          </Grid>
          <Grid item xs={12}>
            <AdminCheckSearch />
          </Grid>
          <Grid item xs={3}>
            <Grid item>
              <AdminCharts title="数値関連" />
            </Grid>
            <Grid item>
              <AdminCharts title="発注販売"/>
            </Grid>
            <Grid item>
              <AdminCharts title="経営"/>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <ApiTestContainer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default AdminMain
