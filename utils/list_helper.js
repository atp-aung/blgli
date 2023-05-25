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
// let maxValue = -Infinity;
// let maxKey = '';

// for (const [key, value] of Object.entries(obj)) {
//   if (value > maxValue) {
//     maxValue = value;
//     maxKey = key;
//   }
// }
const mostBlgs = (b) => {
  const aa = b.reduce((c, { author: k }) => ((c[k] = (c[k] || 0) + 1), c), {});
  let maxv = -Infinity;
  let maxk = "";
  for (const [key, value] of Object.entries(aa)) {
    if (value > maxv) {
      maxv = value;
      maxk = key;
    }
  }
  const bb = { author: maxk, blogs: maxv };
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
