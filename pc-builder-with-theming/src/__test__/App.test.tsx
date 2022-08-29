import { useState } from 'react';
import renderer from 'react-test-renderer';
import App from './../App';

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useState: jest.fn(),
  };
});

const useStateMock = useState as jest.Mock;

describe('Test [App] component', () => {
  jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
  test('Component [App] should render when dark theme is true', () => {
    useStateMock.mockImplementation(() => [true]);
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Component [App] should render when dark theme is false', () => {
    useStateMock.mockImplementation(() => [false]);
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
