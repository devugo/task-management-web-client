import { Alert } from 'antd';
import { useSelector } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

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
          <LineChart
            width={width <= 768 ? width - 60 : 600}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Count', angle: -90 }} />
            <Tooltip />
            <Legend />
          </LineChart>
        )}
      </div>
    </div>
  );
};

export default DashboardChart;
