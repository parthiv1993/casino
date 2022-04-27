import { useCallback, useContext } from 'react';
import { logout } from '../../../api/loginApi';
import { Avatar, Icon } from '../../../components';
import LoginContext from '../../../contexts/login/LoginContext';
import getLabel from '../../../helpers/labels';
import {
  CustomerName,
  Event,
  LogOutButton,
  AvatarContainer,
  UserInfoWrapper
} from './UserInfo.styles';

const UserInfo = () => {
  const { user, setUser } = useContext(LoginContext);

  const { username, name: customerName, event: customerEvent, avatar: avatarLink } = user;

  const onLogOut = useCallback(async () => {
    try {
      await logout({ username });

      setUser(null);
    } catch (e) {
      console.log(e);
    }
  }, [setUser, username]);

  return (
    <>
      <UserInfoWrapper>
        <AvatarContainer>
          <Avatar avatarLink={avatarLink} />
        </AvatarContainer>
        <CustomerName>{customerName}</CustomerName>
        <Event>{customerEvent}</Event>
        <LogOutButton onClick={onLogOut}>
          <Icon iconName="fa-solid fa-chevron-left" addMargin />
          {getLabel('HOME_PAGE_LOGOUT')}
        </LogOutButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserInfo;
