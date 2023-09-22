/* eslint-disable react/prop-types */
import { Card, Title, AreaChart } from "@tremor/react";
const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "May 62",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
  {
    date: "May 22",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
  {
    date: "May 22",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 0,
    "The Pragmatic Engineer": 0,
  },
];

function dataFormatter(number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
}

export const Chart = (props) => {
  return (
    <Card
      style={{ backgroundColor: "white", border: "none", boxShadow: "none" }}
    >
      <Title style={{ color: "black" }}>
        Newsletter revenue over time (USD)
      </Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={[props.color, "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};
