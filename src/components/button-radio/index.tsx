import './button-radio.scss';

import RenderIcon from '../icons/RenderIcon';

const ButtonRadio = () => {
  return (
    <div className="button-radio">
      <div className="button-radio__left">
        <RenderIcon title="mdi mdi-flag-outline" /> Priority 1
      </div>
      <div className="button-radio__center">
        <RenderIcon title="mdi mdi-flag-outline" /> Priority 2
      </div>
      <div className="button-radio__right" style={{ border: '1px solid red' }}>
        <RenderIcon title="mdi mdi-flag-outline" /> Priority 3
      </div>
    </div>
  );
};

export default ButtonRadio;
