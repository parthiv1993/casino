import PropTypes from 'prop-types';
import { StyledIcon } from './Icon.styles';

const Icon = ({ iconName, addMargin }) => {
  const className = `${iconName}`;
  return <StyledIcon className={className} addMargin={addMargin} />;
};

Icon.propTypes = {
  iconName: PropTypes.string,
  addMargin: PropTypes.bool
};

export default Icon;
