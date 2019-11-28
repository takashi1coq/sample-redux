import React, {ReactElement} from "react";
import {ApiTestState} from "src/modules/apiTest/apiTestModule";
import ActionDispatcher from "src/containers/apiTest/ActionDispatcher";
import {useDidMount} from "src/Wrapper";

interface Props {
  value: ApiTestState
  actions: ActionDispatcher
}

const TestAxios: React.FC<Props> = (props): ReactElement => {
  const {value, actions} = props
  useDidMount(() => {
    actions.testAxiosdis()
  })
  return (
    <div>
    </div>
  )
}

export default TestAxios
