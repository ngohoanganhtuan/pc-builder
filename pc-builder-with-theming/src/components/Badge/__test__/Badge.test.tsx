import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { Badge } from '@components';

describe('Test [Badge] component', () => {
  test('Component [Badge] matches DOM Snapshot', () => {
    const component = renderer.create(<Badge content={1000} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Badge] should have span element tag', () => {
    render(<Badge content={1000} />);
    expect(screen.getByText('1000').tagName).toEqual('SPAN');
  });

  test('Component [Badge] can have custom class', () => {
    render(
      <Badge
        content={1000}
        className={'custom-class'}
      />
    );
    expect(screen.getByText('1000').classList).toContain('custom-class');
  });
});
