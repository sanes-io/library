import express from "express";
import bookRoute from "./routes/itemRoutes.js";

const app = express();

app.use((req, res, next) => {
  console.log("Hello from the middleware!");

  next();
});

// BODY PARSER
app.use(express.json({ limit: "10kb" }));

// ROUTES
app.use("/api", bookRoute);

export default app;
