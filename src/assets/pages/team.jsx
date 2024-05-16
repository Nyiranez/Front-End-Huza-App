// import { Cards } from './cards'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const datapi = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

class Team extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-background-32n2fm';
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';
    render() {
        return (
            <div>

                <div className='w-10/12 ml-[24rem] mt-32' style={{ height: '500px' }}>
                <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={datapi}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {datapi.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>

                    <div className='mt-20 pb-20 '>
                        <div className='flex flex-row justify-between '>
                            <h1 className='font-bold text-xl'>This Week's Overview</h1>
                            <div className='flex flex-row'>
                                <div className=' text-xl'>Short By: </div>
                                <select className='text-gray-400'>
                                    <option value="Current Week">Current Week</option>
                                    <option value=" Last week">Last Week</option>
                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col space-y-8 mt-12'>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='border-2 border-gray-100 h-44 w-80 flex flex-col items-center justify-center  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                    <div className='space-y-4 '>
                                        <p className='font-bold text-2xl'>197</p>
                                        <p className='text-gray-500'>MakeUp Design</p>

                                        <div className='flex flex-row space-x-2'>
                                            <div className='bg-green-400 text-white rounded-lg flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendUp /><p>+2.5%</p></div>
                                            <p className='text-gray-500'>Since Last Week</p>

                                        </div>
                                    </div>
                                </div>
                                <div className='border-2 border-gray-100 h-44 pt-4 w-80 flex flex-col items-center justify-center  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                    <div className='space-y-4 '>
                                        <p className='font-bold text-2xl'>745</p>
                                        <p className='text-gray-500'>Brainding</p>

                                        <div className='flex flex-row space-x-2'>
                                            <div className='bg-red-400  text-white rounded-lg flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendDown /><p>+1.5%</p></div>
                                            <p className='text-gray-500'>Since Last Week</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                                <div className='border-2 border-gray-100 h-44 pt-4 w-80 flex flex-col items-center justify-center  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                    <div className='space-y-4 '>
                                        <p className='font-bold text-2xl'>512</p>
                                        <p className='text-gray-500'>Curnary Art</p>

                                        <div className='flex flex-row space-x-2'>
                                            <div className='bg-green-400  text-white rounded-lg flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendUp /><p>+0.5%</p></div>
                                            <p className='text-gray-500'>Since Last Week</p>

                                        </div>
                                    </div>
                                </div>
                                <div className='border-2 border-gray-100 h-44 pt-4 w-80 flex flex-col items-center justify-center  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                    <div className='space-y-4 '>
                                        <p className='font-bold text-2xl'>512</p>
                                        <p className='text-gray-500'>Plainters</p>

                                        <div className='flex flex-row space-x-2'>
                                            <div className='bg-green-400  text-white rounded-lg flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendUp /><p>+0.5%</p></div>
                                            <p className='text-gray-500'>Since Last Week</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default Team;