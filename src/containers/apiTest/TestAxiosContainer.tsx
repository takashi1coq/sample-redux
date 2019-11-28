import React, { ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReduxState } from 'src/store'
import { ApiTestState } from 'src/modules/apiTest/apiTestModule'
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher'
import TestAxios from 'src/views/TestAxios'

const TestAxiosContainer: React.FC = (): ReactElement => {
  const apiTest = useSelector<ReduxState, ApiTestState>(state => {
    return state.apiTest
  })
  return <TestAxios value={apiTest} actions={new ActionDispatcher(useDispatch())} />
}

export default TestAxiosContainer
