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
      <p>
        score:
        {value.resItems.map(row => {
          return row.name
        })}
      </p>
      <button type="button" onClick={() => props.actions.fetchApi('all')}>
        saga test
      </button>
    </div>
  )
}

export default ApiTest
