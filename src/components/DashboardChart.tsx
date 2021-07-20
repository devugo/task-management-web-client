import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import { getLoader } from '../helpers/functions/getLoader';
import { renderServerError } from '../helpers/functions/renderServerError';
import useWindowSize from '../helpers/hooks/useWindowSize';
import { READ_TASKS_SUMMARY } from '../store/actions/types';
import { RootStateType } from '../types.d';

const DashboardChart = ({ data }: { data: { name: string; count: number }[] }) => {
  const { loader } = useSelector((state: RootStateType) => state);

  const { width } = useWindowSize();

  // DELETE Loader
  const { errorData } = getLoader(loader, READ_TASKS_SUMMARY);
  const chartWidth = width <= 768 ? width - 60 : width < 934 ? 450 : 600;
  const chartMargin = { top: 5, right: 20, bottom: 5, left: 0 };

  return (
    <div className="dashboard-chart">
      <div className="devugo-card">
        {renderServerError(errorData).length > 0 && (
          <div className="server-message mb-2 mt-2">
            <Alert
              message="Error"
              description={renderServerError(errorData)}
              type="error"
              showIcon
            />
          </div>
        )}
        {!data ? (
          <div className="center">
            <span>Fetching Chart Data</span>
          </div>
        ) : (
          <AreaChart width={chartWidth} height={300} data={data} margin={chartMargin}>
            <defs>
              <linearGradient id="colorUv" x1="1" y1="1" x2="1" y2="0">
                <stop offset="5%" stopColor="#006fd6" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#191970" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="count"
              stroke="#006fd6"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Count', angle: -90 }} />
            <Tooltip />
          </AreaChart>
        )}
      </div>
    </div>
  );
};

export default DashboardChart;
