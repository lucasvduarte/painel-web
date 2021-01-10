import React, { useState } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000,
    },
    {
        name: 'Page B', uv: 3000,
    },
    {
        name: 'Page C', uv: 2000,
    },
    {
        name: 'Page D', uv: 2780,
    },
    {
        name: 'Page E', uv: 1890,
    },
];

export default function Grafico() {

    const [test, setTest] = useState<any>({
        data: data, activeIndex: 2
    });

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width='100%'>
                <BarChart
                    data={test.data}
                    margin={{
                        top: 5, right: 0, left: 0, bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis tickCount={6} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" fill="red" name="Respostas Erradas">
                        {
                            data.map((entry: any, index: number) => (
                                <Cell cursor="pointer" fill={index === test.activeIndex ? 'green' : 'red'} key={`cell-${index}`} />
                            ))
                        }
                    </Bar>
                    <Bar dataKey="values" fill="green" name="Respostas Corretas" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
