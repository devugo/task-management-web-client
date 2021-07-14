import store from '../../store';
import { ProjectType } from '../../types.d';

export const getPageContentTitle = (type: string, search: string): string => {
  const state = store.getState();
  let title = 'Tasks';
  if (type) {
    switch (type) {
      case 'all':
        title = 'All Tasks';
        break;
      case 'today':
        title = 'Today Tasks';
        break;
      case 'upcoming':
        title = 'Upcoming Tasks';
        break;
      case 'overdue':
        title = 'Overdue Tasks';
        break;
      default:
        return title;
    }
  } else if (search) {
    const searchTypeArr = search.split('=', -1);
    if (searchTypeArr) {
      const searchType = searchTypeArr[0];
      const id = searchTypeArr[1];
      if (searchType.includes('project')) {
        const projects = state.projects.data;
        const project = projects.find((x: ProjectType) => x.id === id);
        if (project) {
          title = `${project.title} Project Tasks`;
        } else {
          title = 'Project Tasks';
        }
      } else if (searchType.includes('level')) {
        const priorities = state.priorities.data;
        const priority = priorities.find((x: any) => x.id === id);
        if (priority) {
          title = `${priority.title} Tasks`;
        } else {
          title = 'Priority Tasks';
        }
      } else if (searchType.includes('label')) {
        const labels = state.labels.data;
        const label = labels.find((x: any) => x.id === id);
        if (label) {
          title = `${label.title} Label Tasks`;
        } else {
          title = 'Label Tasks';
        }
      }
    }
  }
  return title;
};
