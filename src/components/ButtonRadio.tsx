import { useSelector } from 'react-redux';

import { RootStateType } from '../types.d';
import RenderIcon from './RenderIcon';

const ButtonRadio = ({
  value,
  changeSelect,
}: {
  value: string;
  changeSelect: (value: any, type: string) => void;
}) => {
  const { priorities } = useSelector((state: RootStateType) => state);
  const priorityData = priorities.data;

  return (
    <div className="button-radio">
      {priorityData.map((priority, index) => {
        const isSelected = priority.id === value;
        const textColor = isSelected ? 'white' : priority.color;
        const backgroundColor = isSelected ? priority.color : 'white';
        const borderColor = priority.color;

        return (
          <div
            key={index}
            className="button-radio__radio"
            onClick={() => changeSelect(priority.id, 'level')}
            style={{ backgroundColor, border: '1px solid', borderColor }}
          >
            <RenderIcon styles={{ color: textColor }} title="mdi mdi-flag-outline" />{' '}
            <span style={{ color: textColor }}>{priority.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonRadio;
