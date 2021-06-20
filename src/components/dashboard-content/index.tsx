import './dashboard-content.scss';

import PageContent from '../page-content';
import PageContentTitle from '../page-content-title';
import Task from '../task';

const DashboardContent = () => {
  return (
    <PageContent>
      <div className="dashboard-content">
        <PageContentTitle title="Today Tasks" />
        <Task
          borderColor="red"
          title="Task One"
          description="This is definitely for task one. GOt it?!"
        />
        <Task
          borderColor="orange"
          title="Task One"
          description="This is definitely for task one. GOt it?!"
        />
        <Task
          borderColor="grey"
          title="Task One"
          description="This is definitely for task one. GOt it?!"
        />

        <PageContentTitle title="Overdue Tasks" />

        <Task
          borderColor="red"
          title="Task One"
          description="This is definitely for task one. GOt it?!"
        />
        <Task
          borderColor="orange"
          title="Task One"
          description="This is definitely for task one. GOt it?!"
        />
        <Task
          borderColor="grey"
          title="Task One"
          description="This is definitely for task one. GOt it?!"
        />
      </div>
    </PageContent>
  );
};

export default DashboardContent;
