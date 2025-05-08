import app from "./app.js";
import { connectDb } from "./db.js";

connectDb();
app.listen(909, () => {
  console.log("Sever listening on: http://localhost:909");
});
