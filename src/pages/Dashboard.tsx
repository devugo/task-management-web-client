import LeftSideBar from '../components/left-sidebar';
import PageWrapper from '../components/page-wrapper';

const Dashboard = () => {
  return (
    <PageWrapper>
      <div className="dashboard">
        <LeftSideBar />
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
