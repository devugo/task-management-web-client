import './add-task-section.scss';

import RenderIcon from '../icons/RenderIcon';

const AddTaskSection = ({
  showModal,
  setModalTitle,
  setModalData,
}: {
  showModal: () => void;
  setModalTitle: (x: string) => void;
  setModalData: (data?: any) => void;
}) => {
  const openModal = async () => {
    setModalData();
    await setModalTitle('Add Task');
    showModal();
  };

  return (
    <>
      <div className="add-task-section" onClick={openModal}>
        <RenderIcon styles={{ fontSize: 20 }} title="mdi mdi-text-box-plus-outline" />
        <p>New Task</p>
      </div>
    </>
  );
};

export default AddTaskSection;
