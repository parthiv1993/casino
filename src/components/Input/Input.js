import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledInput, StyledInputContainer } from './Input.style';

const Input = ({ suffixIcon, onChange, ...restProps }) => {
  return (
    <StyledInputContainer>
      <StyledInput
        {...restProps}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {suffixIcon && <Icon iconName={suffixIcon} />}
    </StyledInputContainer>
  );
};

Input.propTypes = {
  suffixIcon: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  suffixIcon: null,
  onChange: () => {}
};

export default Input;
