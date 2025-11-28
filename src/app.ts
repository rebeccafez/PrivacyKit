import express from 'express';

const app: express.Application = express();

const port: number = 3000;

app.get('/', (_req, _res) => {
  _res.send("Application!");
})

app.listen(port, () => {});
