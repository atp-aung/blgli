const listHelper = require("../utils/list_helper").dummy;

describe("test value one one", () => {
  test("dummy returns one one", () => {
    const blogs = [];
    const result = listHelper(blogs);
    expect(result).toBe(1);
  });
});
