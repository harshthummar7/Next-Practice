import { data } from "../../../data/data";

export default async function index(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const value = req.body.v;
    console.log("................" + value);
    const newData = {
      id: Date.now(),
      title: value,
    };
    data.push(newData);
    console.log(data);
    console.log("................" + newData);
    res.status(201).json(newData);
  }
}
