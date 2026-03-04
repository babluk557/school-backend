import app from "./app";

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.clear();

  console.log("=======================================");
  console.log("🚀 School Backend Server Started");
  console.log("=======================================");
  console.log(`🌍 Environment : ${process.env.NODE_ENV || "development"}`);
  console.log(`🔗 Local URL   : http://localhost:${PORT}`);
  console.log("=======================================\n");
});
