# callbag-last
Emit the last value emitted from source on completion

```javascript
pipe(
  interval(100),
  take(5),
  last(),
  observe(v => console.log(v)) // 4
);
```
