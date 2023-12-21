const pagiantion = (req, res, next) => {
  const { perpage, page } = req.query;
  const pages = parseInt(page && page > 0 ? page : 1);
  const limit = parseInt(perpage || 0);

  const pagiante = perpage
    ? { limit, offset: page ? (pages - 1) * limit : 0 }
    : {};

  res.pages = pages;
  res.pagiante = pagiante;

  next();
};

module.exports = {
  pagiantion
};