import React, { ReactElement } from 'react'
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { cyan } from '@material-ui/core/colors'
import SampleHeader from 'src/views/SampleHeader'
import SampleChart from 'src/views/SampleChart'
import { Container, Grid } from '@material-ui/core'
import CounterContainer from 'src/containers/counter/Container'
import TodoContainer from 'src/containers/todo/Container'
import ApiTestContainer from 'src/containers/apiTest/Container'

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
      //      paddingBottom: theme.spacing(4),
    },
  }),
)

const SampleMain: React.FC = (): ReactElement => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={mainTheme}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SampleHeader />
          </Grid>
          <Grid item xs={12}>
            <ApiTestContainer />
          </Grid>
          <Grid item xs={12}>
            <SampleChart />
          </Grid>
          <Grid item xs={3}>
            <TodoContainer />
          </Grid>
          <Grid item xs={3}>
            <CounterContainer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default SampleMain
