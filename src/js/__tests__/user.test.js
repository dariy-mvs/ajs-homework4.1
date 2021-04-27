import getStringHealth from '../app';

test('getStringHealth', () => {
  const result = getStringHealth({ name: 'elf', health: 90 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 98 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 50 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 55 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 15 });
  expect(result).toBe('wounded');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 5 });
  expect(result).toBe('critical');
});
