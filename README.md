# callbag-last

Emit the last value emitted from source on completion.

```javascript
const { pipe, interval, take, observe } = require('callbag-basics');

pipe(
  interval(100),
  take(5),
  last(),
  observe(v => console.log(v)) // 4
);

pipe(
  fromIter([1, 2, 3, 4]),
  last(),
  iterate(v => console.log(v)) // 4
);
```
