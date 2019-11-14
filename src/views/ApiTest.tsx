import React, { ReactElement } from 'react'
import { ApiTestState } from 'src/modules/apiTest/apiTestModule'
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher'

interface Props {
  value: ApiTestState
  actions: ActionDispatcher
}

const ApiTest: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  return (
    <div>
      {console.dir(value)}
      <button type="button" onClick={() => props.actions.fetchApi()}>
        saga test
      </button>
    </div>
  )
}

export default ApiTest
