
import React, { PureComponent } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle,
} from "recharts";

 import { BarChart, Bar } from "recharts";


// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     cv: 2800,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     cv: 1998,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 4800,
//     cv: 3800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     cv: 4108,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     cv: 5800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     cv: 2800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     cv: 4400,
//     amt: 2100,
//   },
// ];

// export default class Waves extends PureComponent {
//   static demoUrl =
//     "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

//   render() {
//     return (
//       <ResponsiveContainer>
//         <LineChart
//           height={8}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="1 1 " vertical={false} />
//           <XAxis dataKey="name" axisLine={false} />
//           <YAxis axisLine={false} />
//           <Tooltip />

//           <Line type="monotone" dataKey="pv" stroke="#FC8F89" r={0} />
//           <Line type="monotone" dataKey="uv" stroke="#B7D24B" r={0} />
//           <Line
//             type="monotone"
//             dataKey="cv"
//             stroke="#D5D7DC"
//             r={0}
//             strokeDasharray="3 4 5 2"
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }
// }




export default class Waves extends PureComponent {
  

  generateRandomData() {
    const data = [];
    const names = ["Jan 12 ", "Feb B", "Mar C", "April D", "Page E", "May F", "June G"];
    
    for (let i = 0; i < names.length; i++) {
      data.push({
        name: names[i],
        uv: Math.floor(Math.random() * 5000), 
        pv: Math.floor(Math.random() * 10000), 
        cv: Math.floor(Math.random() * 3000),
        amt: Math.floor(Math.random() * 5000), 
      });
    }
    
    return data;
  }

  render() {
    const data = this.generateRandomData(); 

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          
          <Line type="monotone" dataKey="pv" stroke="#FC8F89" r={0} />
          <Line type="monotone" dataKey="uv" stroke="#B7D24B" r={0} />
          <Line type="monotone" dataKey="cv" stroke="#D5D7DC" r={0} strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}


//------------------------------------------------------------------------------

export class Columns extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/tiny-bar-chart-xzyy8g";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#E26861" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

// ----------------------------------------------------------------------------

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function BarDasboardCharts() {
  return (
    <div className="bg-[#FFF] rounded-[8px] p-3">
      <div className="flex justify-between items-center my-3">
        <p className="font-inter text-[20px] font-medium leading-[30px] text-left px-3 mb-3">
          Customer Statistics
        </p>
        <button className="bg-transparent border border-gray p-2 flex items-center gap-2 text-[#5D6679] font-inter text-[14px] font-medium leading-[20px] text-left">
          <CiCalendar className="text-[20px]" /> Weekly <FaChevronDown />
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="rounded-[20px]"
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 50, right: 50 }}
          />
          <YAxis axisLine={false} />
          <Tooltip />
          {/* <Legend /> */}
          <CartesianGrid strokeDasharray="1 1 " vertical={false} />
          <Bar dataKey="pv" fill="#FEAF00" radius={[20, 20, 0, 0]} width={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// -----------------------------------------------------------------------------------------------------------------------------

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const CustomLegend = () => (
  <div className="flex justify-center items-center gap-5">
    <div className="flex gap-1 items-center ">
      <svg height="10" width="10">
        <circle cx="5" cy="5" r="5" fill="#DBA362" />
      </svg>
      <p className="text-[#667085] font-sans text-xs font-normal leading-[14.52px] text-left">
        ordered
      </p>
    </div>

    <div className="flex gap-1 items-center">
      <svg height="10" width="10">
        <circle cx="5" cy="5" r="5" fill="#FEAF00" />
      </svg>
      <p className="text-[#667085] font-sans text-xs font-normal leading-[14.52px] text-left">
        Delivered
      </p>
    </div>
  </div>
);
export function LineDashboardCharts() {
  return (
    <div className="bg-[#FFF] rounded-[8px] p-3">
      <div className="flex justify-center items-center my-3">
        <p className="font-inter text-[20px] font-medium leading-[30px] text-center px-3 mb-3">
          Monthly shipment comparison.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart width={500} height={300} data={data2}>
          <CartesianGrid strokeDasharray="1 1 " vertical={false} />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend content={CustomLegend} />
          <Line type="monotone" dataKey="pv" stroke="#FEAF00" r={0} />
          {/*  to delete circle put r=0 */}
          <Line type="monotone" dataKey="uv" stroke="#FDB382" r={0} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

//---------------------------------------------------------------------------------------------------------------------------------------------

const data4 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// Custom active shape for the bar when it's active
export const CustomActiveBar = (props) => {
  const { fill, stroke, x, y, width, height } = props;
  return (
    <Rectangle
      fill={fill}
      stroke={stroke}
      x={x}
      y={y}
      width={width}
      height={height}
      radius={[3, 3, 0, 0]}
    />
  );
};

export function Bar3Dashboard() {
  return (
    <div className=" rounded-[8px] p-3   bg-[#fff]">
      <p className="font-poppins text-[20px] font-semibold leading-[32px] text-left text-[#05004E] mb-3">
        Target vs Reality
      </p>

      <ResponsiveContainer width="100%" height={"100%"}>
        <BarChart
          width={"100%"}
          height={"100%"}
          data={data4}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={10}
        >
          <CartesianGrid
            strokeDasharray="0 0"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} stroke="none" />
          <Tooltip />

          <Bar
            dataKey="pv"
            fill="#EC655E"
            shape={<CustomActiveBar fill="#EC655E" stroke="none" />}
          />
          <Bar
            dataKey="uv"
            fill="#845BAF"
            shape={<CustomActiveBar fill="#845BAF" stroke="none" />}
          />
          <Bar
            dataKey="uv"
            fill="#571CA5"
            shape={<CustomActiveBar fill="#571CA5" stroke="none" />}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-between items-center my-2">
        <div className="flex items-center gap-5">
          {/* <img src={at} alt="" /> */}
          <div className="flex flex-col ">
            <p className="font-poppins text-[12px] font-semibold leading-[16px] text-left">
              Monthly sales
            </p>
            <p className="font-poppins text-[10px] font-normal leading-[16px] text-left text-[#737791]">
              Aramex Company
            </p>
          </div>
        </div>

        <p className="font-poppins text-[14px] font-medium leading-[20px] text-right text-[#E32219]">
          8.234
        </p>
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center gap-5">
          {/* <img src={Fedex} alt="" /> */}
          <div className="flex flex-col ">
            <p className="font-poppins text-[12px] font-semibold leading-[16px] text-left">
              Monthly sales
            </p>
            <p className="font-poppins text-[10px] font-normal leading-[16px] text-left text-[#737791]">
              FedEx Company
            </p>
          </div>
        </div>

        <p className="font-poppins text-[14px] font-medium leading-[20px] text-right text-[#4E148C]">
          8.234
        </p>
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center gap-5">
          {/* <img src={smsa} alt="" /> */}
          <div className="flex flex-col ">
            <p className="font-poppins text-[12px] font-semibold leading-[16px] text-left">
              Monthly sales
            </p>
            <p className="font-poppins text-[10px] font-normal leading-[16px] text-left text-[#737791]">
              smsaexpress
            </p>
          </div>
        </div>

        <p className="font-poppins text-[14px] font-medium leading-[20px] text-right text-[#4E148C]">
          8.234
        </p>
      </div>
    </div>
  );
}
