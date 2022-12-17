import { logsByDay, logsByMonth } from "../../../data";

export default function handler(req, res) {
  const { sn } = req.query;
  const productLogsByDay = logsByDay.filter((l) => l.sn === `${sn}`);
  const productLogsByMonth = logsByMonth.filter((l) => l.sn === `${sn}`);

  if (!productLogsByDay && !productLogsByMonth)
    return res.status(404).json({
      message: "No data found. (tip: data only exists for SN0000f43).",
    });

  res.status(200).json([
    { setName: "day", data: productLogsByDay },
    { setName: "month", data: productLogsByMonth },
  ]);
}
