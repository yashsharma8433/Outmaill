'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// Line chart data
const lineData = [
  { name: 'Mon', uv: 400 },
  { name: 'Tue', uv: 300 },
  { name: 'Wed', uv: 200 },
  { name: 'Thu', uv: 278 },
  { name: 'Fri', uv: 189 },
  { name: 'Sat', uv: 239 },
  { name: 'Sun', uv: 349 },
];

// Pie chart data
const pieData = [
  { name: 'Ethereum', value: 45 },
  { name: 'BSC', value: 30 },
  { name: 'TRON', value: 20 },
];

const COLORS = ['#194568', '#B3E856', '#C8BBFF'];

export default function ChartComponent({ type = 'line' }) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        {type === 'line' ? (
          <LineChart data={lineData}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#7D91F3"
              strokeWidth={2}
            />
          </LineChart>
        ) : (
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
