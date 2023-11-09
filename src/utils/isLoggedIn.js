const isLoggedIn = (req, res, next) => {
  // eslint-disable-next-line no-unused-expressions
  req.user ? next() : res.sendStatus(401)
}

export default isLoggedIn
