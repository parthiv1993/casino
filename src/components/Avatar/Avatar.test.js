import { renderComponentWithLightTheme } from '../../testUtils';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('should match snapshot', () => {
    const { container } = renderComponentWithLightTheme(<Avatar avatarLink="fa-username" />);
    expect(container).toMatchSnapshot();
  });
});
