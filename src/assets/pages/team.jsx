import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Line, Area, } from 'recharts';

import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";


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
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const data = [
    {
        name: 'MakeUp ',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Carnary',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Plainters',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Brainding',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    // {
    //     name: 'Page E',
    //     uv: 1520,
    //     pv: 1108,
    //     amt: 1100,
    // },
    // {
    //     name: 'Page F',
    //     uv: 1400,
    //     pv: 680,
    //     amt: 1700,
    // },
];

class Team extends PureComponent {
    
    render() {
        
        return (
            <div className='mt-10    '>
                <div className='w-full   mt-[2rem] '>

                    <h1 className='font-bold text-xl ml-[6rem]'>This Week's Overview</h1>


                    <div className='flex flex-row space-x-2 mt-4 w-10/12 justify-center items-center ml-[4rem]'>
                        <div className='flex flex-row space-x-2'>
                            <div className= "border-blue-100 border-2   h-32 w-64 flex flex-col items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                <div className='space-y-1 pb-2'>
                                    {/* <p className='font-bold text-2xl'>197</p> */}
                                    <p className='text-gray-500'>MakeUp Design</p>
                                    <div className='flex flex-row space-x-2'>
                                        <div className='bg-green-400 text-white rounded-full flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendUp /><p>+2.5%</p></div>
                                        <p className='text-gray-500'>Since Last Week</p>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 border-gray-100 h-32 w-64 flex flex-col items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                <div className='space-y-1 pb-2'>
                                    {/* <p className='font-bold text-2xl'>745</p> */}
                                    <p className='text-gray-500'>Brainding</p>
                                    <div className='flex flex-row space-x-2'>
                                        <div className='bg-orange-400 text-white rounded-full flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendDown /><p>-1.5%</p></div>
                                        <p className='text-gray-500'>Since Last Week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <div className='border-2 border-gray-100  h-32 w-64 flex flex-col items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                <div className='space-y-1 pb-2'>
                                    {/* <p className='font-bold text-2xl'>512</p> */}
                                    <p className='text-gray-500'>Culinary Art</p>
                                    <div className='flex flex-row space-x-2'>
                                        <div className='bg-blue-400 text-white rounded-full flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendUp /><p>+0.5%</p></div>
                                        <p className='text-gray-500'>Since Last Week</p>
                                    </div>
                                </div>
                            </div>
                            <div className='border-2 border-gray-100 h-32 w-64 flex flex-col items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                <div className='space-y-1 pb-2'>
                                    {/* <p className='font-bold text-2xl'>512</p> */}
                                    <p className='text-gray-500'>Painters</p>
                                    <div className='flex flex-row space-x-2'>
                                        <div className='bg-yellow-400 text-white rounded-full flex flex-row space-x-1 px-2 py-2 items-center justify-center'><FaArrowTrendUp /><p>+0.5%</p></div>
                                        <p className='text-gray-500'>Since Last Week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between mt-8 pt-4 bg-blue-950'>

                        <div className='w-96 ' style={{ height: 500, width: 800 }}>
                            <ResponsiveContainer>
                                <ComposedChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top: 20,
                                        right: 20,
                                        bottom: 20,
                                        left: 4,
                                    }}
                                >
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <XAxis dataKey="name" scale="band" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                        <div className=' w-86 mr-16 mt-4 bg-slate-100 px-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px flex flex-col items-center justify-center ' style={{ height: 450 }}>
                            <div className='flex flex-col items-center justify-center mt-8'>
                                <p className='text-gray-400 text-2xl'>Admin analyisis</p>
                            </div>

                            <div className='flex flex-row justify-center space-x-4 items-center mt-8'>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='bg-blue-500 w-4 h-5'></div>
                                   <p className='text-gray-400'> Carnary Art</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='bg-yellow-400 w-4 h-5'></div>
                                    <p className='text-gray-400'>Painters</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='bg-orange-400 w-4 h-5'></div>
                                    <p className='text-gray-400'>Brainding</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='bg-green-400 w-4 h-5'></div>
                                    <p className='text-gray-400'>MakeUp </p>
                                </div>

                            </div>

                            <ResponsiveContainer >
                                <PieChart>
                                    <Pie
                                        data={datapi}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={80}
                                        // fill="#8884d8"
                                        dataKey="value"

                                    >
                                        {datapi.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>

                                </PieChart>

                            </ResponsiveContainer>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Team;