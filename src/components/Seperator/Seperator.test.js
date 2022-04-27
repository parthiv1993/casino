import { render } from '@testing-library/react';
import Seperator from './Seperator';

describe('Seperator', () => {
  it('should match snapshot', () => {
    const { container } = render(<Seperator />);
    expect(container).toMatchSnapshot();
  });
});
