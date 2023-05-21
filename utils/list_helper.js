const dummy = (blogs) => {
  return 1;
};

const dd = (blogs) => {
  return 2;
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
};
