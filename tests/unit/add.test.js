function add(a, b) {
  return a + b;
}

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});
