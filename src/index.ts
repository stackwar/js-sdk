const delay = (interval, num) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(num);
      resolve(1);
    }, interval)
  );
};

export default async (n) => {
  while (--n) {
    await delay(1000, n);
  }
};
