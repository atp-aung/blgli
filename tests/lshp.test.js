const listHelper = require("../utils/list_helper").dummy;
const dd = require("../utils/list_helper").dd;
const ttlikescount = require("../utils/list_helper").ttlikes;

describe("test value one", () => {
  test("dummy returns one", () => {
    const blogs = [];
    const result = listHelper(blogs);
    expect(result).toBe(1);
  });

  test("dummy returns two", () => {
    const blogs = [];
    const result = dd(blogs);
    expect(result).toBe(2);
  });
});

describe("test tt likes", () => {
  test("total likes", () => {
    const blogs = [
      {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 5,
        __v: 0,
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0,
      },
      {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 5,
        __v: 0,
      },
      {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 5,
        __v: 0,
      },
    ];

    const result = ttlikescount(blogs);
    expect(result).toBe(20);
  });
});
