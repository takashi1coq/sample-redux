import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReduxState } from 'src/store'
import { ApiTestState } from 'src/modules/apiTest/apiTestModule'
import ApiTest from 'src/views/ApiTest'
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher'

const ApiTestContainer: React.FC = (): ReactElement => {
  const apiTest = useSelector<ReduxState, ApiTestState>(state => {
    return state.apiTest
  })
  return <ApiTest value={apiTest} actions={new ActionDispatcher(useDispatch())} />
}

export default ApiTestContainer
