import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { StyledChartWrapper } from "../index.styled";

const AppLineChart = () => {
  const data = [
    { name: "Jan", "This Month": 4000, "Last Month": 2400 },
    { name: "Feb", "This Month": 3000, "Last Month": 1398 },
    { name: "Mar", "This Month": 2000, "Last Month": 9800 },
    { name: "Apr", "This Month": 2780, "Last Month": 3908 },
    { name: "May", "This Month": 8890, "Last Month": 4800 },
    { name: "Jun", "This Month": 2390, "Last Month": 3800 },
    { name: "Jul", "This Month": 3490, "Last Month": 4300 },
    { name: "Aug", "This Month": 9800, "Last Month": 2000 },
    { name: "Sep", "This Month": 2780, "Last Month": 1398 },
    { name: "Oct", "This Month": 2000, "Last Month": 9800 },
    { name: "Nov", "This Month": 3908, "Last Month": 2780 },
    { name: "Dev", "This Month": 4000, "Last Month": 3908 },
  ];

  return (
    <StyledChartWrapper>
      <ResponsiveContainer width="100%" height={340}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradientPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#195038" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#195038" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="gradientUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B0014" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3B0014" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical={false} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: "30px" }}
          />

          <Area
            type="monotone"
            dataKey="This Month"
            stroke="#3B0014"
            strokeWidth={3}
            fill="url(#gradientUv)"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
          <Area
            type="monotone"
            dataKey="Last Month"
            stroke="#195038"
            strokeWidth={3}
            fill="url(#gradientPv)"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChartWrapper>
  );
};

export default AppLineChart;
