import test from 'tape';
import {TextMode} from '../lib/textMode.js';

const testString = 'Hello!';

function extractText (tb) {
  const filter = ({asciiCode}) => !!asciiCode;
  const reducer = (acc, {asciiCode}) => acc + String.fromCharCode(asciiCode);
  return tb.filter(filter).reduce(reducer, '');
}

test('cls', t => {
  t.plan(2);
  const tm = new TextMode();
  tm.print('Hello!');
  tm.loc = [5, 5];
  tm.cls();
  t.equal(extractText(tm.textBuffer), '');
  t.equal(tm.loc.pos, 0);
});

test('print', t => {
  t.plan(2);
  const tm = new TextMode();
  tm.print(testString);
  t.equal(extractText(tm.textBuffer), testString);
  t.equal(tm.loc.pos, testString.length);
});

test('println', t => {
  t.plan(2);
  const tm = new TextMode();
  tm.println(testString);
  t.equal(extractText(tm.textBuffer), testString);
  t.deepEqual([tm.loc.row, tm.loc.col], [1, 0]);
});

test('inv', t => {
  t.plan(testString.length * 2);
  const tm = new TextMode();
  const [fg, bg] = [tm.fg, tm.bg];
  tm.inv();
  tm.print(testString);
  for (let i = 0; i < testString.length; i++) {
    t.equal(tm.textBuffer[i].fg, bg);
    t.equal(tm.textBuffer[i].bg, fg);
  }
});

test('center - fullWidth false');
test('center - fullWidth true');
test('backspace');
