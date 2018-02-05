# callbag-last

[Callbag](https://github.com/callbag/callbag) operator that emit the last value emitted from source on completion, based on provided expression.

`npm install callbag-last`

`last(predicate?: (v: any) => Boolean, resultSelector?: (v: any) => any)`

```javascript
const {
  pipe,
  interval,
  take,
  fromIter,
  iterate,
  observe
} = require('callbag-basics');

pipe(
  interval(100),
  take(5),
  last(),
  observe(v => console.log(v)) // 4
);

pipe(
  interval(100),
  take(5),
  last(v => v % 3 === 0, v => `value: ${v}`),
  observe(v => console.log(v)) // value: 3
);

pipe(
  fromIter([1, 2, 3, 4]),
  last(),
  iterate(v => console.log(v)) // 4
);
```
