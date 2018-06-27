import test from 'tape';
import {TextMode} from '../lib/textMode.js';

test('cr', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.cr();
  t.deepEqual([tm.row, tm.col], [0, 0]);
});

test('lf', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.lf();
  t.deepEqual([tm.row, tm.col], [1, 5]);
});

test('crlf', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.crlf();
  t.deepEqual([tm.row, tm.col], [1, 0]);
});

test('newLine', t => {
  t.plan(1);
  const tm = new TextMode();
  tm.moveTo(0, 5);
  tm.newLine();
  t.deepEqual([tm.row, tm.col], [1, 0]);
});
