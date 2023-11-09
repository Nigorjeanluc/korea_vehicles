export default (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: error.message
    });
  }
}
