import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminMain from 'src/views/AdminViews/AdminMain'

export const CreateAdminBreadcrumb = (path: string): string[] => {
  const result: string[] = path.split('/').filter((x,i,self) => {
    return self.indexOf(x) === i
  })
  return result.map(row => {
    switch (row) {
      case '':
        return 'ホーム'
      case 'fStore':
        return '店舗'
      default:
        return ''
    }
  })
}

const Routes: React.FC = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AdminMain} />
        <Route path="/fStore" exact component={AdminMain} />
      </Switch>
    </Router>
  )
}

export default Routes

