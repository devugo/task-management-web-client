import './add-task-section.scss';

import RenderIcon from '../icons/RenderIcon';

const AddTaskSection = ({
  showModal,
  setModalTitle,
}: {
  showModal: () => void;
  setModalTitle: (x: string) => void;
}) => {
  const openModal = async () => {
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
