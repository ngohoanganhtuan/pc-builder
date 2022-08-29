import renderer from 'react-test-renderer';
import { Loading } from '../Loading';

describe('Test [Loading] component', () => {
  test('Component [Loading] should render loading if isFetching props is true', () => {
    const component = renderer
      .create(
        <Loading isFetching={true}>
          <h1>Children</h1>
        </Loading>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [Loading] should render children if isFetching props is false', () => {
    const component = renderer
      .create(
        <Loading isFetching={false}>
          <h1>Children</h1>
        </Loading>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
