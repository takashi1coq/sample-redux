import React, { ReactElement } from 'react'
import { TableCell } from '@material-ui/core'

interface Props {
  value: string
}

export const NameCell: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  let color = ''
  if (value === 'Japan') {
    color = 'lightpink'
  }
  return (
    <>
      <TableCell style={{ backgroundColor: color }}>{value}</TableCell>
    </>
  )
}

export const Alpha2CodeCell: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  let color = ''
  if (value === 'AL') {
    color = 'lightskyblue'
  }
  return (
    <>
      <TableCell style={{ backgroundColor: color }}>{value}</TableCell>
    </>
  )
}

export const CapitalCell: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  let color = ''
  if (value === 'Sucre') {
    color = 'lightpink'
  }
  return (
    <>
      <TableCell style={{ backgroundColor: color }}>{value}</TableCell>
    </>
  )
}

export const DemonymCell: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  let color = ''
  if (value === 'Chinese') {
    color = 'lightpink'
  }
  return (
    <>
      <TableCell style={{ backgroundColor: color }}>{value}</TableCell>
    </>
  )
}

export const SubregionCell: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  let color = ''
  if (value === 'Eastern Asia') {
    color = 'lightpink'
  }
  return (
    <>
      <TableCell style={{ backgroundColor: color }}>{value}</TableCell>
    </>
  )
}
