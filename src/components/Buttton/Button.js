import PropTypes from 'prop-types';
import StyledButton from './Button.style';

const Button = ({ children, fullWidth, buttonType, onClick, ...restProps }) => {
  return (
    <StyledButton fullWidth={fullWidth} buttonType={buttonType} onClick={onClick} {...restProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['primary', 'secondary'])
};

Button.defaultProps = {
  children: null,
  buttonType: 'primary',
  fullWidth: false,
  onClick: () => {}
};

export default Button;
