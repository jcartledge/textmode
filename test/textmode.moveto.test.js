import test from 'tape';
import {TextMode} from '../lib/textMode.js';

test('moveTo chainable', t => {
  t.plan(2);
  const tm = new TextMode();
  const tm2 = tm.moveTo(0, 0);
  t.equal(tm, tm2);
  const tm3 = tm.moveTo(0);
  t.equal(tm, tm3);
});

test('moveTo row, col', t => {
  t.plan(5);
  const tm = new TextMode();
  [1, 2, 3, 4, 5].forEach(row => {
    tm.moveTo(row, 0);
    t.equal(tm.pos, tm.numCols * row);
  });
});

test('moveTo row, col - negative row and col', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(-1, -10);
  t.deepEqual([tm.row, tm.col], [0, 0]);
});

test('moveTo row, col - NaN input', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo('a', 'b');
  t.deepEqual([tm.row, tm.col], [0, 0]);
});

test('moveTo row, col - over bounds', t => {
  t.plan(3);
  const tm = new TextMode();

  tm.moveTo(0, tm.numCols);
  t.deepEqual([tm.row, tm.col], [0, tm.numCols - 1]);

  tm.moveTo(tm.numRows, 0);
  t.deepEqual([tm.row, tm.col], [tm.numRows - 1, 0]);

  tm.moveTo(tm.numRows + 100, tm.numCols + 100);
  t.deepEqual([tm.row, tm.col], [tm.numRows - 1, tm.numCols - 1]);
});

test('moveTo pos', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(tm.numCols - 1);
  t.deepEqual([tm.row, tm.col], [0, tm.numCols - 1]);
});

test('moveTo pos - negative', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(-1);
  t.equal(tm.pos, 0);
});

test('moveTo pos - NaN', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo('a');
  t.equal(tm.pos, 0);
});

test('moveTo pos - over bounds', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(tm.numRows * tm.numCols * 2);
  t.deepEqual([tm.row, tm.col], [tm.numRows - 1, tm.numCols - 1]);
});
