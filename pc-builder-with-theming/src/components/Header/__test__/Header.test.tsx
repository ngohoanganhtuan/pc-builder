import { BrowserRouter } from 'react-router-dom';
import * as renderer from 'react-test-renderer';

// Components
import { Header } from '@components';

describe('Test [Header] component', () => {
  test('Component [Header] should render correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Header handleToggleSidebar={jest.fn()} />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
