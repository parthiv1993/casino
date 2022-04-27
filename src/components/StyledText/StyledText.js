import PropTypes from 'prop-types';
import { Description, SubTitle, Title } from './StyledText.styles';

const StyledText = ({ children, type, ...restProps }) => {
  switch (type) {
    case 'title':
      return <Title {...restProps}>{children}</Title>;
    case 'subTitle':
      return <SubTitle {...restProps}>{children}</SubTitle>;
    case 'description':
      return <Description {...restProps}>{children}</Description>;
    default:
      return <Description {...restProps}>{children}</Description>;
  }
};

StyledText.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};

export default StyledText;
