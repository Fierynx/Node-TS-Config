import express from "express";
const app = express();

// Middle to parse body request
app.use(express.json());

export default app;
