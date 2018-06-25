import test from 'tape';
import {TextMode} from '../lib/textMode.js';

test('Constructor with default args creates a canvas', t => {
  const tm = new TextMode();
  t.ok(tm.canvas instanceof HTMLCanvasElement);
  t.end();
});

test('Constructor passed a canvas uses it', t => {
  const canvas = document.createElement('canvas');
  const tm = new TextMode({canvas});
  t.equal(canvas, tm.canvas);
  t.end();
});
