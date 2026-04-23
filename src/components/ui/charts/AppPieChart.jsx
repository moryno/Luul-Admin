import { PieChart, Pie, Tooltip, Sector } from "recharts";
import { defaultTheme } from "@/lib";
import { StyledChartWrapper } from "../index.styled";

const AppPieChart = ({ isPieChart = true }) => {
  const { theme } = defaultTheme;
  const data = [
    { name: "Active", value: 45 },
    { name: "Pending", value: 30 },
    { name: "Cancelled", value: 25 },
    { name: "Draft", value: 5 },
  ];

  const COLORS = [
    theme.palette.chart.main,
    theme.palette.chart.default,
    theme.palette.chart.accent,
    theme.palette.chart.secondary,
    theme.palette.chart.active,
    theme.palette.chart.completed,
    theme.palette.chart.inProgress,
  ];

  const renderCustomShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, index } =
      props;

    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={data[index]?.color ?? COLORS[index % COLORS.length]}
        stroke="none"
      />
    );
  };

  return (
    <StyledChartWrapper>
      <PieChart
        responsive
        style={{
          // gridColumn: "1 / 4",
          // gridRow: "3 / 4",
          height: "100%",
          width: "100%",
          maxHeight: "200px",
          aspectRatio: 1,
          // margin: "0 auto",
          border: "none",
        }}
      >
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          outerRadius={80}
          innerRadius={isPieChart ? undefined : "60%"}
          fill="#8884d8"
          //   onClick={handleClick}
          shape={renderCustomShape}
        />
        <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
        />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        {/* <Legend
        content={<CustomLegend />}
        align="left"
        verticalAlign="bottom"
        // wrapperStyle={{ paddingTop: "20px" }}
      /> */}
      </PieChart>
    </StyledChartWrapper>
  );
};

export default AppPieChart;
