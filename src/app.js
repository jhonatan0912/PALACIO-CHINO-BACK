import express from 'express'
import productsRoutes from "./routes/products.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(indexRoutes);

app.use('/api', productsRoutes);

app.use((req, res, next) => {
  res.statusCode(404).json({
    message: "Endpoint not found"
  })
})

export default app;