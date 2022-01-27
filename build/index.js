"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 3000;
const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)());
app.get('/', async (req, res) => {
  console.log('/');
  return res.json({
    status: 'ok',
    message: 'Hello world!'
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!\n ________________________\n|                        |\n| http://localhost:${port}/ |\n|________________________|\n`);
});