const SETTING = {
  name: 'LOTTO',
  count: 6,
  maxNumber: 45,
};

function getRandomNumber(maxNumber) {
  let nums = new Set();

  while (nums.size < maxNumber.count) {
    let n = Math.ceil(Math.random() * (maxNumber.maxNumber - 1) + 1);
    if (!nums.has(n)) nums.add(n);
  }

  return [...nums];
}

console.log(getRandomNumber(SETTING));
