const last = () => source => (start, slink) => {
  if (start !== 0) return;
  let talkback;
  let lastVal;
  source(0, (t, d) => {
    if (t === 0) {
      talkback = d;
    } else if (t === 1) {
      lastVal = d;
    } else if (t === 2) {
      slink(1, lastVal);
      talkback(2);
      slink(2);
    } else {
      slink(t, d);
    }
  });
};

module.exports = last;
