import * as renderer from 'react-test-renderer';

// Components
import { Footer } from '@components';

describe('Test [Footer] component', () => {
  test('Component [Footer] render correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
