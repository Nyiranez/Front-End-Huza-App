import React, { PureComponent } from 'react';
import axios from 'axios';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

class Team extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        axios
            .get('https://huza-backend-app-api-1.onrender.com/api/profile/category-analytics')
            .then(response => {
                console.log('API Response:', response.data);
                this.setState({
                    data: response.data.analytics,
                    loading: false,
                    error: null
                });
            })
            .catch(error => {
                console.error('API Error:', error);
                this.setState({
                    loading: false,
                    error: 'Failed to fetch data'
                });
            });
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className='mt-10'>
                <div className='w-full mt-6'>
                    <h1 className='font-bold text-xl ml-6 mb-4'>This Week's Overview</h1>

                    <div className='flex flex-wrap justify-center space-x-4'>
                        {data.map(item => (
                            <div
                                key={item._id}
                                className='border-2 border-gray-100 h-32 w-64 flex flex-col items-center justify-center shadow-md mb-4'
                            >
                                <p className='text-gray-500'>{item._id}</p>
                                <div className='flex flex-row space-x-2'>
                                    <div className={`bg-${item._id}-400 text-white rounded-full flex flex-row space-x-1 px-2 py-2 items-center justify-center`} >
                                        {item.count > 5 ? <FaArrowUp className='text-black' /> : <FaArrowDown className='text-black' />}
                                        <p className='text-black'>{item.count}%</p>
                                    </div>
                                    <p className='text-gray-500'>Since Last Week</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-row justify-between mt-8 pt-4 pb-4 pr-4 bg-blue-950'>
                        <div className='w-full px-4'>
                            <ResponsiveContainer width='100%' height={400}>
                                <ComposedChart
                                    data={data}
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                >
                                    <CartesianGrid stroke='#f5f5f5' />
                                    <XAxis dataKey='_id' />
                                    <YAxis dataKey='count' />
                                    <Tooltip />
                                    <Legend />
                                    <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
                                    <Bar dataKey='pv' barSize={20} fill='#413ea0' />
                                    <Line type='monotone' dataKey='count' stroke='#ff7300' />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>

                        <div className='w-full md:w-fit xl:fit px-2 mt-4 bg-gray-100 rounded-lg shadow-md'>
                            <div className='flex flex-col items-center justify-center '>
                                <p className='text-gray-400 text-2xl'>Admin Analysis</p>
                                <div className='flex flex-row justify-wrap space-x-4 mt-8 ml-4'>
                                    {data.map(item => (
                                        <div key={item._id} className={`flex flex-col items-center`}>
                                            <div className={`bg-${item._id}-400 w-4 h-5 rounded-full`}></div>
                                            <div className='bg-blue-950 h-5 w-4'></div>
                                            <p className='text-gray-400'>{item._id}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div >
                                
                                <ResponsiveContainer width='100%' height={300}>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            dataKey='count'
                                            nameKey='_id'
                                            cx='50%'
                                            cy='50%'
                                            outerRadius={100}
                                            fill='#8884d8'
                                            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                                                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                                                return (
                                                    <text x={x} y={y} fill='white' textAnchor='middle'>
                                                        {`${(percent * 100).toFixed(0)}%`}
                                                    </text>
                                                );
                                            }}
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className='flex justify-center  space-x-4 mb-8'>
                                    {data.map((entry, index) => (
                                        <div key={`label-${index}`} className='flex flex-col items-center'>
                                            <div className={`bg-${entry._id}-400 w-4 h-5 rounded-full`}></div>
                                            <p className='text-gray-400'>{`${entry._id}: ${entry.count}%`}</p>
                                        </div>
                                    ))}
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


