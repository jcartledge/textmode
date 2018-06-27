import test from 'tape';
import {TextMode} from '../lib/textMode.js';

test('cr', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.cr();
  t.deepEqual([0, 0], [tm.row, tm.col]);
});

test('lf', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.lf();
  t.deepEqual([1, 5], [tm.row, tm.col]);
});

test('crlf', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.crlf();
  t.deepEqual([1, 0], [tm.row, tm.col]);
});

test('newLine', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.newLine();
  t.deepEqual([1, 0], [tm.row, tm.col]);
});
