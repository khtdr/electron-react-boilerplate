import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';
import Counter from './counter';

test('Counter component', (t) => {
  const tree = render.create(<Counter counter={42} />);
  const json = JSON.stringify(tree);
  t.falsy(json.match(/41/));
  t.truthy(json.match(/42/));
  t.falsy(json.match(/43/));
});
