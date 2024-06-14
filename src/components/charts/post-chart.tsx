"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import postChartData from "@/data/post-chart-data";

interface PostChartProps {}

export function PostChart({}: PostChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For This Year</CardTitle>
        <CardDescription>Views per month</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          style={{
            width: "100%",
            height: 300,
          }}
        >
          <ResponsiveContainer>
            <LineChart
              width={1100}
              height={300}
              data={postChartData}
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
              <Line type="monotone" dataKey="views" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
