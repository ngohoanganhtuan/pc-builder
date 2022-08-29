// Helpers
import { setRouteActiveClass } from '@helpers';

describe('Test [setRouteActiveClass] helper', () => {
  test('Helper [setRouteActiveClass] default class name should match snapshot when active', () => {
    expect(
      setRouteActiveClass({
        isActive: true,
      })
    ).toMatchSnapshot();
  });

  test('Helper [setRouteActiveClass] default class name should match snapshot when not active', () => {
    expect(
      setRouteActiveClass({
        isActive: false,
      })
    ).toMatchSnapshot();
  });

  test('Helper [setRouteActiveClass] should return class names contains "bg-warning border-0" class names when active', () => {
    expect(
      setRouteActiveClass({
        isActive: true,
      })
    ).toContain('bg-warning border-0');
  });

  test('Helper [setRouteActiveClass] should return class names contains "bg-white" class names when not active', () => {
    expect(
      setRouteActiveClass({
        isActive: false,
      })
    ).toContain('bg-white');
  });
});
