import test from 'tape';
import {TextMode, TextModeFont, textModePalette} from '../lib/textMode.js';

test('Constructor with default args creates a canvas', t => {
  t.plan(1);
  const tm = new TextMode();
  t.ok(tm.canvas instanceof HTMLCanvasElement);
});

test('Constructor passed a canvas uses it', t => {
  t.plan(1);
  const canvas = document.createElement('canvas');
  const tm = new TextMode({canvas});
  t.equal(canvas, tm.canvas);
});

test('Constructor with default args has a font', t => {
  t.plan(1);
  const tm = new TextMode();
  t.ok(tm.font instanceof TextModeFont);
});

test('Constructor passed a font uses it', t => {
  t.plan(1);
  class TestFont extends TextModeFont {}
  const font = new TestFont();
  const tm = new TextMode({font});
  t.equal(tm.font, font);
});

test('Constructor with default args has a palette', t => {
  t.plan(1);
  const tm = new TextMode();
  t.equal(tm.palette, textModePalette);
});
