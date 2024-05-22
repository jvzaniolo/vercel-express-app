import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/products", (req, res) => {
  res.json({ ok: true });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
