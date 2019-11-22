import React, {ReactElement} from 'react'
import {Props} from 'src/views/AdminViews/AdminMain'
import {CreateAdminBreadcrumb} from 'src/Routes'
import {Link, makeStyles, Theme, createStyles, Breadcrumbs} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 2),
    },
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }),
)

const AdminBreadcrumb: React.FC<Props> = (props): ReactElement => {
  const {history} = props
  const classes = useStyles()
  const breadcrumb = CreateAdminBreadcrumb(history.location.pathname)
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumb.map(row => {
        return (
          <Link color="inherit" href="/" className={classes.link}>
            {row}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

export default AdminBreadcrumb
