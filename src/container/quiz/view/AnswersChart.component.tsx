import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid
} from 'recharts';
import { getAnalyticsChoices } from '../Quizzes.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { Progress } from "../../../component/Component";

export default function Grafico() {
    let { id } = useParams<ParamTypes>();
    const [data, setData] = useState<any>({ answers: [], correctAnswer: '' });
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        getAnalyticsChoices(id).then(res => {
            console.log(res.data)
            setData(format(res.data));
        }).finally(function () {
            setRequest(false);
        });
    }, [id]);

    const format = (data: any) => {
        const answers: any = data.answers;
        let array: Array<any> = [];
        Object.keys(answers).forEach(function (item) {
            let newObject: Object = { name: item.toUpperCase(), markedQuantity: answers[item] }
            array.push(newObject);
        });
        const newObject = { answers: array, correctAnswer: correctAnswer(data.correctAnswer) };
        return newObject;
    }

    const correctAnswer = (correctAnswer: string) => {
        let value: number = 0;
        if (correctAnswer === 'b') {
            value = 1;
        } else if (correctAnswer === 'c') {
            value = 2;
        } else if (correctAnswer === 'd') {
            value = 3;
        } else {
            value = 4;
        }
        return value;
    }

    if (request) {
        return <Progress open={request} />
    }

    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width='100%'>
                <BarChart
                    width={500}
                    height={300}
                    data={data.answers}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis tickCount={6} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="markedQuantity" fill="red" name="Respostas Erradas"  >
                        {
                            data.answers.map((entry: any, index: number) => (
                                <Cell cursor="pointer" fill={index === data.correctAnswer ? 'green' : 'red'} key={`cell-${index}`} />
                            ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}