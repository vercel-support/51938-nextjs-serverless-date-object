// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const start = '2022-02-05T23:00:00.000Z'

  const aDate = new Date(start).toLocaleDateString("de-DE", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  })
  res.status(200).json({ date: aDate })
}
