import { useQuery } from "@tanstack/react-query";
import { graphCovidData } from "../../services/fetch";
import { LineChart, Line } from "recharts";
import convertInputToObject from "../../utils/convertInputToObject";
interface ChartData {
  date: string;
  value: unknown;
}

function Charts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["graphCovidData"],
    queryFn: async () => await graphCovidData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const newData = [
    { name: "2017", react: 32 },
    { name: "2018", react: 42 },
    { name: "2019", react: 51 },
    { name: "2020", react: 38 },
    { name: "2021", react: 65 },
  ];

  // const chartDataArray: ChartData[] = cases.map(([date, value]) => ({
  //   date: new Date(date).toLocaleDateString(),
  //   value: value,
  // }));

  // const chartData = convertInputToObject(data?.cases);

  console.log(data);

  return (
    <div className="border rounded-lg overflow-x-scroll">
      <LineChart width={500} height={100} data={newData} className="border">
        <Line
          type="monotone"
          dataKey="react"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
}

export default Charts;
