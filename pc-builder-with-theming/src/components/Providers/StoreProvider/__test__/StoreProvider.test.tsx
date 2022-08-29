import renderer from 'react-test-renderer';

// Components
import { StoreProvider } from '@components';

describe('Test [StoreProvider] component', () => {
  test('Component [StoreProvider] should render correctly', () => {
    const component = renderer
      .create(
        <StoreProvider>
          <h1>React Children</h1>
        </StoreProvider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
