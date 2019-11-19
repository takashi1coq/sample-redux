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

export const TranslationsCell: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  return (
    <>
      <TableCell>{value}</TableCell>
    </>
  )
}

export const FlagCell: React.FC<Props> = (props): ReactElement => {
  const { value } = props
  let color = ''
  if (value === 'https://restcountries.eu/data/btn.svg') {
    color = 'lightpink'
  }
  return (
    <>
      <TableCell style={{ backgroundColor: color }}>
        <img src={value} width="120" height="90" />
      </TableCell>
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

interface RegionProps {
  region: string
  subregion: string
}

export const RegionCell: React.FC<RegionProps> = (props): ReactElement => {
  const { region, subregion } = props
  let color = ''
  if (region === 'Asia') {
    color = 'lightskyblue'
  }
  return (
    <>
      <TableCell style={{ backgroundColor: color }}>
        {region} / {subregion}
      </TableCell>
    </>
  )
}
