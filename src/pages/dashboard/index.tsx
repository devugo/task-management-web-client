import './dashboard.scss';

import DashboardContent from '../../components/dashboard-content';
import LeftSideBar from '../../components/left-sidebar';
import PageWrapper from '../../components/page-wrapper';
import RightSideBar from '../../components/right-sidebar';

const Dashboard = () => {
  return (
    <PageWrapper>
      <div className="dashboard">
        <LeftSideBar />
        <DashboardContent />
        <RightSideBar />
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
