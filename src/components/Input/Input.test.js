import { fireEvent } from '@testing-library/react';
import { renderComponentWithLightTheme } from '../../testUtils';
import Input from './Input';

describe('Input', () => {
  it('should match snapShot when there is no suffic Icon', () => {
    const { container } = renderComponentWithLightTheme(<Input />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapShot when there is suffic Icon', () => {
    const { container } = renderComponentWithLightTheme(<Input suffixIcon={'fa-username'} />);
    expect(container).toMatchSnapshot();
  });

  it('should pass the props', () => {
    const { getByTestId } = renderComponentWithLightTheme(
      <Input suffixIcon={'fa-username'} type={'password'} data-testid="test-input" />
    );
    expect(getByTestId('test-input')).toHaveProperty('type', 'password');
  });

  it('should trigger onChange event', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = renderComponentWithLightTheme(
      <Input
        suffixIcon={'fa-username'}
        type={'password'}
        data-testid="test-input"
        onChange={mockOnChange}
      />
    );
    fireEvent.change(getByTestId('test-input'), { target: { value: 'abc' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('abc');
  });
});
