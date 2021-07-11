import './multi-select-input.scss';

import { useState } from 'react';

const labels = [
  {
    title: 'Label 1',
    id: 1,
  },
  {
    title: 'Label 2',
    id: 2,
  },
  {
    title: 'Label 3',
    id: 3,
  },

  {
    title: 'Label 4',
    id: 4,
  },
  {
    title: 'Label 5',
    id: 5,
  },
  {
    title: 'Label 6',
    id: 6,
  },
  {
    title: 'Label 7',
    id: 7,
  },
  {
    title: 'Label 8',
    id: 8,
  },
];

const MultiSelectInput = () => {
  const [selected, setSelected] = useState([1]);

  const select = (id: number) => {
    const state = selected;
    const exist = state.findIndex((x) => x === id);
    if (exist === -1) {
      setSelected((prevState) => [...prevState, id]);
    } else {
      setSelected((prevState) => [...prevState].filter((x) => x !== id));
    }
  };

  return (
    <div className="devugo-multi-select">
      <p className="placeholder">Select a value</p>

      <div className="pop-up">
        {labels.map((label, index) => {
          const isSelected = selected.includes(label.id);
          return (
            <div
              onClick={() => select(label.id)}
              key={index}
              className={`pop-up__value${isSelected ? ' selected' : ''}`}
            >
              <span>{label.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelectInput;
