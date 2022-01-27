import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', async (req, res) => {
  console.log('/');
  return res.json({
    status: 'ok',
    message: 'Hello world!'
  });
});

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port}!\n ________________________\n|                        |\n| http://localhost:${port}/ |\n|________________________|\n`
  );
});
