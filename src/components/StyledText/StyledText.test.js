import { render } from '@testing-library/react';
import StyledText from './StyledText';

describe('StyledText', () => {
  it('should render title', () => {
    const { container } = render(<StyledText type="title">Dummy</StyledText>);
    expect(container).toMatchSnapshot();
  });

  it('should render subTitle', () => {
    const { container } = render(<StyledText type="subTitle">Dummy</StyledText>);
    expect(container).toMatchSnapshot();
  });

  it('should render description', () => {
    const { container } = render(<StyledText type="description">Dummy</StyledText>);
    expect(container).toMatchSnapshot();
  });

  it('should render description by default', () => {
    const { container } = render(<StyledText>Dummy</StyledText>);
    expect(container).toMatchSnapshot();
  });
});
