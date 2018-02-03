const last = () => source => (start, slink) => {
  if (start !== 0) return;
  let talkback;
  let lastVal;
  let lasted = false;
  source(0, (t, d) => {
    if (t === 0) {
      talkback = d;
      slink(t, d);
    } else if (t === 1) {
      lastVal = d;
      talkback(1);
    } else if (t === 2) {
      if (lasted) return;
      lasted = true;
      slink(1, lastVal);
      slink(2);
    } else {
      slink(t, d);
    }
  });
};
