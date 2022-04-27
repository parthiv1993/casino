import PropTypes from 'prop-types';
import { baseURL } from '../../api/urls';
import { AvatarImage } from './Avatar.styles';

const Avatar = ({ avatarLink }) => {
  const imageLink = `${baseURL}/${avatarLink}`;
  return <AvatarImage src={imageLink} alt="avatar" />;
};

Avatar.propTypes = {
  avatarLink: PropTypes.string
};

export default Avatar;
