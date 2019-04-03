import { defineClassName } from './index';

test('defineClassName return right className', () => {
  expect(defineClassName(true, 'visible')).toEqual('visible');
  expect(defineClassName(false, 'visible')).not.toEqual('visible');
  expect(defineClassName(undefined, 'visible')).toEqual('');
  expect(defineClassName(null, 'visible')).toEqual('');
  expect(defineClassName(true)).toEqual('');
  expect(defineClassName('visible')).toEqual('');
});
