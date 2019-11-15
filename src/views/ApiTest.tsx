import React, { ReactElement } from 'react'
import { ApiTestState } from 'src/modules/apiTest/apiTestModule'
import ActionDispatcher from 'src/containers/apiTest/ActionDispatcher'
import SampleTable, { sampleTableProps } from 'src/views/SampleTable'

interface Props {
  value: ApiTestState
  actions: ActionDispatcher
}

function createCountryObj(current: {}): {} {
  const name = Object.keys(current).filter(k => (k === 'name') ? k : '').join()
  const demonym = Object.keys(current).filter(k => (k === 'demonym') ? k : '').join()
}

const ApiTest: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  const sampleTableComponentProps: sampleTableProps = { tableHeader: [], tableRows: [] }
  value.resItems.reduce((prev, current) => {
    const obj: { [key: string]: { data: string; color: string } } = {}
    Object.keys(current).filter(k => (k === 'name') ? k : '').join()
  })
//  value.resItems.map(row => {
//    const one: { [key: string]: { data: string; color: string } } = {}
//    for (const k of Object.keys(row)) {
//      console.dir(row)
//      switch (k) {
//        case 'name':
//          one.name = { data: row[k], color: '' }
//          break
//        case 'alpha2Code':
//          one.alpha2Code = { data: row[k], color: '' }
//          break
//        case 'alpha3Code':
//          one.alpha3Code = { data: row[k], color: '' }
//          break
//        case 'capital':
//          one.capital = { data: row[k], color: '' }
//          break
//        case 'demonym':
//          one.demonym = { data: row[k], color: '' }
//          break
//        case 'subregion':
//          one.subregion = { data: row[k], color: '' }
//          break
//        default:
//          break
//      }
//    }
//    return sampleTableComponentProps.tableRows.push(one)
//  })
//  sampleTableComponentProps.tableHeader.push({ headerName: '国名', headerKey: 'name' })
//  sampleTableComponentProps.tableHeader.push({
//    headerName: '国名コード2桁',
//    headerKey: 'alpha2Code',
//  })
//  sampleTableComponentProps.tableHeader.push({
//    headerName: '国名コード3桁',
//    headerKey: 'alpha3Code',
//  })
//  sampleTableComponentProps.tableHeader.push({ headerName: '首都', headerKey: 'capital' })
//  sampleTableComponentProps.tableHeader.push({ headerName: '住民の呼称', headerKey: 'demonym' })
//  sampleTableComponentProps.tableHeader.push({
//    headerName: '大陸（サブリージョン）',
//    headerKey: 'subregion',
//  })
  return (
    <div>
      <button type="button" onClick={() => props.actions.fetchApi()}>
        saga test
      </button>
      <SampleTable
        tableHeader={sampleTableComponentProps.tableHeader}
        tableRows={sampleTableComponentProps.tableRows}
      />
    </div>
  )
}

export default ApiTest
