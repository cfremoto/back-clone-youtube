import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swaggerConfig.js";
import { connect } from "./db/db.js";
import router from "./routes/index.js";

const app = express();
dotenv.config();

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api", router);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)))

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected to Server on port: " + process.env.PORT);
});
