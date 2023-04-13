import { data } from "../../../data/data";

export default async function index(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const Data = data.find((d) => d.id === parseInt(id));
    res.status(201).json(Data);
  } else if (req.method === "DELETE") {
    const Data = data.find((d) => d.id === parseInt(id));
    const index = data.findIndex((d) => d.id === parseInt(id));
    data.splice(index, 1);
    res.status(201).json(Data);
  }
}
