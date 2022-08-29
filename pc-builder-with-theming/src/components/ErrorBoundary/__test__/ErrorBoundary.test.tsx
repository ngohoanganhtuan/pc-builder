import { render } from '@testing-library/react';
import * as renderer from 'react-test-renderer';

// Components
import { ErrorBoundary, ErrorBoundaryUI } from '@components';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Test [ErrorBoundary] component', () => {
  test('Fallback component [ErrorBoundaryUI] should render correctly', () => {
    const component = renderer
      .create(
        <ErrorBoundaryUI
          error={{
            name: 'Error',
            message: 'Something wrong',
            stack: 'Error details...',
          }}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [ErrorBoundary] renders children component if no-error', () => {
    const component = <p>React Child</p>;
    const { getByText } = render(<ErrorBoundary>{component}</ErrorBoundary>);
    expect(getByText(/react child/i)).toBeTruthy();
  });

  test('Component [ErrorBoundary] renders fallback component [ErrorBoundaryUI] if has-error', () => {
    const CorruptedComponent = () => {
      throw new Error('This component has an error');
    };
    const { getAllByText } = render(
      <ErrorBoundary>
        <CorruptedComponent />
      </ErrorBoundary>
    );
    expect(CorruptedComponent).toThrow(/this component has an error/i);
    expect(getAllByText(/this component has an error/i)[0]).toBeVisible();
  });
});
