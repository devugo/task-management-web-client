import { useSelector } from 'react-redux';

import { LabelType, ProjectType, RootStateType } from '../types.d';
import RenderIcon from './RenderIcon';

const PageContentTitle = ({
  title,
  showProjectModal,
  showLabelModal,
  setModalTitle,
  search,
  setModalData,
}: {
  title: string;
  showProjectModal?: () => void;
  showLabelModal?: () => void;
  setModalTitle?: (title: string) => void;
  search?: string;
  setModalData?: (data: any) => void;
}) => {
  const { projects, labels } = useSelector((state: RootStateType) => state);

  const getData = async () => {
    const searchTypeArr = search?.split('=', -1);
    if (searchTypeArr) {
      const searchType = searchTypeArr[0];
      const id = searchTypeArr[1];
      if (searchType.includes('project')) {
        const projectsData = projects.data;
        const project = projectsData.find((x: ProjectType) => x.id === id);
        if (project) {
          setModalTitle && setModalTitle('Update Project');
          setModalData && setModalData(project);
          showProjectModal && showProjectModal();
        }
      } else if (searchType.includes('label')) {
        const labelssData = labels.data;
        const label = labelssData.find((x: LabelType) => x.id === id);
        if (label) {
          setModalTitle && setModalTitle('Update Label');
          setModalData && setModalData(label);
          showLabelModal && showLabelModal();
        }
      }
    }
  };

  const openFormModal = async () => {
    await getData();
  };

  return (
    <div className="page-content-title">
      <h2>{title}</h2>
      {search && (
        <span onClick={openFormModal}>
          {' '}
          <RenderIcon styles={{ color: 'dodgerBlue' }} title="mdi mdi-playlist-edit" />{' '}
        </span>
      )}
    </div>
  );
};

export default PageContentTitle;
