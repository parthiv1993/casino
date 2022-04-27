import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { LogoImage, PageContent, PageWrapper } from './PageTemplate.styles';

const PageTemplate = () => {
  return (
    <PageWrapper>
      <LogoImage src={logo} alt="logo" />
      <PageContent>
        <Outlet />
      </PageContent>
    </PageWrapper>
  );
};

export default PageTemplate;
