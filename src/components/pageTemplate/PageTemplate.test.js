import PageTemplate from './PageTemplate';
import { renderComponentWithLightTheme } from '../../testUtils';

describe('PageTemplate ', () => {
  it('should match snapshot', () => {
    const { container } = renderComponentWithLightTheme(<PageTemplate />);
    expect(container).toMatchSnapshot();
  });
});
