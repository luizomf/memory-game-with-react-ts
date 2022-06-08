export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const keyGenerator = (pre = 'pre') => {
  return `${pre}_${new Date().getTime()}_${getRandomInt(0, 10000)}`;
};
