- font
  - proper support for different sizes - e.g. 7x5 (requires perf measurement?)
  - should be passed to the tm constructor as well?
- palette
  - class for palette - pass into constructor
- tm
  + render callbacks
    + textModeBeforeRender
    + textModeBeforeRenderChar
    + textModeBeforeRenderRow
  - use diff/dirty to rerender only when needed.
  - rewrite render core
  - modularise
  - profiling
  + input
    - delete
- demos
  - colour cycling
  - render callbacks
- tests?
- flow/ts
