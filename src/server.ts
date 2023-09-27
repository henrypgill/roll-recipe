import cors from "cors";
import express from "express";
import morgan from "morgan";
import { Client } from "pg";
import { setupDbClientConfig } from "./core/setupDbClientConfig";
import { homeRouter } from "./routes/home";

const app = express();
export const database = new Client(setupDbClientConfig());

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", homeRouter);

connectToDbAndStartListening();

async function connectToDbAndStartListening() {
  console.log("Connecting to database...");
  await database.connect();
  console.log("Connected to database");

  console.log("Starting express server...");
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
}
