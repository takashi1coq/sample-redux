import * as React from 'react'
import {createMuiTheme, ThemeProvider, makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import {cyan} from '@material-ui/core/colors'
import {SampleHeader} from 'views/SampleHeader'
import SampleTable from 'views/SampleTable'

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
            paddingTop: theme.spacing(5)
        }
    })
)

export default function SampleMain() {
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
