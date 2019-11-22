import React, {ReactElement,} from 'react'
import {PieChart, Pie, ResponsiveContainer, Label, Cell} from 'recharts'

const data = [{name: 'Group A', value: 534}, {name: 'Group B', value: 258},];
const percent = (data[0].value / data.reduce((p, c) => p + c.value, 0)) * 100
const COLORS = ['#00ff7f', '#8fbc8f']

interface Props {
  title: string
}

const AdminPieChart: React.FC<Props> = (props): ReactElement => {
  const {title} = props
  return (
    <ResponsiveContainer width="100%" height={110}>
      <PieChart>
        <Pie data={data} dataKey='value' innerRadius={26} outerRadius={36} fill="#008080" paddingAngle={5}>
          <Cell fill={COLORS[0]}/>
          <Cell fill={COLORS[1]}/>
          <Label value={percent.toFixed(0) + '%'} position='center' />
        </Pie>
      <text x={7} y={105} fontSize='10'>{title}</text>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default AdminPieChart
