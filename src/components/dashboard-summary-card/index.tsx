import './dashboard-summary-card.scss';

import RenderIcon from '../icons/RenderIcon';

const DashboardSummaryCard = ({
  title,
  count,
  iconTitle,
}: {
  title: string;
  count: number;
  iconTitle: string;
}) => {
  return (
    <div className="devugo-card dashboard-summary-card">
      <div className="title-count">
        <span className="title">{title}</span>
        <span className="count">{count}</span>
      </div>
      <div className="icon-wrapper">
        <RenderIcon styles={{ fontSize: 25, color: '#fff' }} title={iconTitle} />
      </div>
    </div>
  );
};
export default DashboardSummaryCard;
