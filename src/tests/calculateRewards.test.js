import { calculateRewardPoints } from '../utils/calculateRewards';

test('returns 90 for $120', () => {
  expect(calculateRewardPoints(120)).toBe(90);
});
test('returns 20 for $70', () => {
  expect(calculateRewardPoints(70)).toBe(20);
});
test('returns 0 for $40', () => {
  expect(calculateRewardPoints(40)).toBe(0);
});
test('handles fractional amount', () => {
  expect(calculateRewardPoints(120.75)).toBe(91);
});