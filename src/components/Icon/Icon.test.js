import { renderComponentWithLightTheme } from '../../testUtils';
import Icon from './Icon';

describe('Icon', () => {
  it('should match snapshot', () => {
    const { container } = renderComponentWithLightTheme(<Icon iconName="fa-username" />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when margin is added', () => {
    const { container } = renderComponentWithLightTheme(<Icon iconName="fa-username" addMargin />);
    expect(container).toMatchSnapshot();
  });
});
