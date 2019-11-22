import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReduxState } from 'src/store'
import { ApiTestState } from 'src/modules/apiTest/apiTestModule'
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher'
import AdminTable from 'src/views/AdminViews/AdminTable'

const ApiTestContainer: React.FC = (): ReactElement => {
  const apiTest = useSelector<ReduxState, ApiTestState>(state => {
    return state.apiTest
  })
  return <AdminTable value={apiTest} actions={new ActionDispatcher(useDispatch())} />
}

export default ApiTestContainer
