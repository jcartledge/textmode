import test from 'tape';
import {TextMode} from '../lib/textMode.js';

test('loc = [row, col]', t => {
  t.plan(5);
  const tm = new TextMode();
  [1, 2, 3, 4, 5].forEach(row => {
    tm.loc = [row, 0];
    t.equal(tm.loc.pos, tm.numCols * row);
  });
});

test('loc = {row, col}', t => {
  t.plan(5);
  const tm = new TextMode();
  [1, 2, 3, 4, 5].forEach(row => {
    tm.loc = {row, col: 0};
    t.equal(tm.loc.pos, tm.numCols * row);
  });
});

test('loc = {x, y}', t => {
  t.plan(5);
  const tm = new TextMode();
  [1, 2, 3, 4, 5].forEach(y => {
    tm.loc = {x: 0, y};
    t.equal(tm.loc.pos, tm.numCols * y);
  });
});

test('loc = [row, col] - negative row and col', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.loc = [-1, -10];
  t.deepEqual([tm.loc.row, tm.loc.col], [0, 0]);
});

test('loc = [row, col] - NaN input', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.loc = ['a', 'b'];
  t.deepEqual([tm.loc.row, tm.loc.col], [0, 0]);
});

test('loc = [row, col] - over bounds', t => {
  t.plan(3);
  const tm = new TextMode();

  tm.loc = [0, tm.numCols];
  t.deepEqual([tm.loc.row, tm.loc.col], [0, tm.numCols - 1]);

  tm.loc = [tm.numRows, 0];
  t.deepEqual([tm.loc.row, tm.loc.col], [tm.numRows - 1, 0]);

  tm.loc = [tm.numRows + 100, tm.numCols + 100];
  t.deepEqual([tm.loc.row, tm.loc.col], [tm.numRows - 1, tm.numCols - 1]);
});

test('loc = pos', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.loc = tm.numCols - 1;
  t.deepEqual([tm.loc.row, tm.loc.col], [0, tm.numCols - 1]);
});

test('loc = pos - negative', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.loc = -1;
  t.equal(tm.loc.pos, 0);
});

test('loc = pos - NaN', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.loc = 'a';
  t.equal(tm.loc.pos, 0);
});

test('loc = pos - over bounds', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.loc = tm.numRows * tm.numCols * 2;
  t.deepEqual([tm.loc.row, tm.loc.col], [tm.numRows - 1, tm.numCols - 1]);
});
