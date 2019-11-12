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
import SampleTable from 'src/views/SampleTable'

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: cyan,
  },
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(5),
    },
  }),
)

const SampleMain: React.FC = (): ReactElement => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.root}>
        <SampleHeader />
        <SampleTable />
      </div>
    </ThemeProvider>
  )
}

export default SampleMain
