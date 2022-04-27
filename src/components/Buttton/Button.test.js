import { fireEvent } from '@testing-library/react';
import { renderComponentWithLightTheme } from '../../testUtils';
import Button from './Button';

describe('Button', () => {
  it('should match snapshot', () => {
    const { container } = renderComponentWithLightTheme(<Button>Button Text</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when it is fullwidth', () => {
    const { container } = renderComponentWithLightTheme(<Button fullWidth>Button Text</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when it is secondaryButton', () => {
    const { container } = renderComponentWithLightTheme(
      <Button buttonType="secondary">Button Text</Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('should call onClick when button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = renderComponentWithLightTheme(
      <Button data-testid="test-button" onClick={mockOnClick}>
        Button Text
      </Button>
    );
    fireEvent.click(getByTestId('test-button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
