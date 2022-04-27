import styled from 'styled-components';
import { devicesMediaQueries } from '../../helpers/deviceHelper';

export const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.Login.background};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.img.attrs({
  width: 720,
  height: 135
})`
  ${devicesMediaQueries.whenMobile} {
    width: 300px;
    height: 60px;
  }
`;

export const PageContent = styled.section`
  width: 100%;
  margin-inline: auto;
  background-color: white;
`;
