import { PieChart, Pie, Cell, Legend } from 'recharts';
import { getLocalStoredData } from '../../Components/LocalStorage/LocalStorage';
import { useLoaderData } from 'react-router';

const Statistics = () => {
    const apiAllData = useLoaderData().length;
    const localData = getLocalStoredData().length;

    const data2 = apiAllData - localData

    const data = [
        { name: 'Your Donation', value: localData },
        { name: 'Total Donation', value: data2 },
    ];

    const COLORS = ['#ff444a', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='pt-44 max-w-screen-xl mx-auto grid justify-center items-center p-5'>
            <PieChart width={400} height={450}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;
