import { it, expect } from "vitest";

it('show 0:0:0:0:0', () => {
  const upperWord = 'a'.toUpperCase()
  expect(upperWord).toMatchSnapshot()
})
