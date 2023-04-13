export default async function index(req, res) {
  const { info = [] } = req.query;

  res.status(201).json(info);
}
