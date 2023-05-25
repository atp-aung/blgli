const dummy = (blogs) => {
  return 1;
};

const dd = (blogs) => {
  return 2;
};

const favBlgs = (blogs) => {
  const b = Math.max(...blogs.map((o) => o.likes));
  const idx = blogs.findIndex((o) => o.likes === b);
  const obj = {
    title: blogs[idx].title,
    author: blogs[idx].author,
    likes: blogs[idx].likes,
  };
  return obj;
};

const mostBlgs = (b) => {
  const aa = b.reduce(
    (c, { author: key }) => ((c[key] = (c[key] || 0) + 1), c),
    {}
  );
  const bb = Math.max(...Object.values(aa));
  return bb;
};

const ttlikes = (ar) => {
  const reducer = (sum, item) => {
    return sum + item.likes;
  };
  return ar.reduce(reducer, 0);
};

module.exports = {
  dummy,
  ttlikes,
  dd,
  favBlgs,
  mostBlgs,
};
