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
  t.equal(tm.canvas, canvas);
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

test('Constructor passed a palette uses it', t => {
  t.plan(1);
  const palette = Array(8).fill(0);
  const tm = new TextMode({palette});
  t.equal(tm.palette, palette);
});

test('Constructor with default numRows and numCols', t => {
  t.plan(2);
  const tm = new TextMode();
  t.ok(tm.numRows);
  t.ok(tm.numCols);
});

test('Constructor passed numRows and numCols', t => {
  t.plan(2);
  const numRows = 5;
  const numCols = 10;
  const tm = new TextMode({numRows, numCols});
  t.equal(tm.numRows, numRows);
  t.equal(tm.numCols, numCols);
});

test('Constructor with default vscale and hscale', t => {
  t.plan(2);
  const tm = new TextMode();
  t.ok(tm.vscale);
  t.ok(tm.hscale);
});

test('Constructor passed vscale and hscale', t => {
  t.plan(2);
  const hscale = 2;
  const vscale = 3;
  const tm = new TextMode({hscale, vscale});
  t.equal(tm.hscale, hscale);
  t.equal(tm.vscale, vscale);
});
