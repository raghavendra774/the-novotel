//import { useDarkMode } from 'context/DarkModeContext';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import styled from 'styled-components';
//import { box } from 'styles/styles';
import Heading from '../../ui/Heading';

const ChartBox = styled.div`
  padding: 2.4rem 3.2rem;

  grid-column: 3 / span 2;

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  /* A bit hack, but okay */
  & > *:first-child {
    margin-bottom: 1.6rem;
  }
`;
/*
const startDataLight = {
  '1 nights': {
    duration: '1 nights',
    value: 0,
    color: '#ef4444',
  },
  '2 nights': {
    duration: '2 nights',
    value: 0,
    color: '#f97316',
  },
  '3 nights': {
    duration: '3 nights',
    value: 0,
    color: '#eab308',
  },
  '4-5 nights': {
    duration: '4-5 nights',
    value: 0,
    color: '#84cc16',
  },
  '6-7 nights': {
    duration: '6-7 nights',
    value: 0,
    color: '#22c55e',
  },
  '8-14 nights': {
    duration: '8-14 nights',
    value: 0,
    color: '#14b8a6',
  },
  '15-21 nights': {
    duration: '15-21 nights',
    value: 0,
    color: '#3b82f6',
  },
  '21+ nights': {
    duration: '21+ nights',
    value: 0,
    color: '#a855f7',
  },
};

const startDataDark = {
  '1 nights': {
    duration: '1 nights',
    value: 0,
    color: '#b91c1c',
  },
  '2 nights': {
    duration: '2 nights',
    value: 0,
    color: '#c2410c',
  },
  '3 nights': {
    duration: '3 nights',
    value: 0,
    color: '#a16207',
  },
  '4-5 nights': {
    duration: '4-5 nights',
    value: 0,
    color: '#4d7c0f',
  },
  '6-7 nights': {
    duration: '6-7 nights',
    value: 0,
    color: '#15803d',
  },
  '8-14 nights': {
    duration: '8-14 nights',
    value: 0,
    color: '#0f766e',
  },
  '15-21 nights': {
    duration: '15-21 nights',
    value: 0,
    color: '#1d4ed8',
  },
  '21+ nights': {
    duration: '21+ nights',
    value: 0,
    color: '#7e22ce',
  },
};
*/

const startDataLight = [
  {
    duration: '1 night',
    value: 0,
    color: '#ef4444',
  },
  {
    duration: '2 nights',
    value: 0,
    color: '#f97316',
  },
  {
    duration: '3 nights',
    value: 0,
    color: '#eab308',
  },
  {
    duration: '4-5 nights',
    value: 0,
    color: '#84cc16',
  },
  {
    duration: '6-7 nights',
    value: 0,
    color: '#22c55e',
  },
  {
    duration: '8-14 nights',
    value: 0,
    color: '#14b8a6',
  },
  {
    duration: '15-21 nights',
    value: 0,
    color: '#3b82f6',
  },
  {
    duration: '21+ nights',
    value: 0,
    color: '#a855f7',
  },
];

const startDataDark = [
  {
    duration: '1 night',
    value: 0,
    color: '#b91c1c',
  },
  {
    duration: '2 nights',
    value: 0,
    color: '#c2410c',
  },
  {
    duration: '3 nights',
    value: 0,
    color: '#a16207',
  },
  {
    duration: '4-5 nights',
    value: 0,
    color: '#4d7c0f',
  },
  {
    duration: '6-7 nights',
    value: 0,
    color: '#15803d',
  },
  {
    duration: '8-14 nights',
    value: 0,
    color: '#0f766e',
  },
  {
    duration: '15-21 nights',
    value: 0,
    color: '#1d4ed8',
  },
  {
    duration: '21+ nights',
    value: 0,
    color: '#7e22ce',
  },
];

function DurationChart({confirmedStays}){
  return <ChartBox>
    <Heading as='h2'>Stay duration summary</Heading>
    <ResponsiveContainer>
      <PieChart>
        <Pie data={startDataLight} nameKey='duration' dataKey='value' innerRadius={80} outerRadius={120} cx="40%" cy="50%" paddingAngle={3}>
          {startDataLight.map(entry=><cell fill={entry.color} stroke={entry.color} key={entry.duration}/>)}
        </Pie>
        <Legend verticalAlign='middle' align='right' width="30%" layout='vertical' iconSize='circle'/>
      </PieChart>
    </ResponsiveContainer>
  </ChartBox>
}

export default DurationChart
