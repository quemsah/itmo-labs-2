const russian = require('./russian');
const [{
  Server: h1
}, x] = [require('http'), require('express')];
const Router = x.Router();
const PORT = 4321;
const {
  log
} = console;
const hu = {
  'Content-Type': 'text/html; charset=utf-8'
};
const app = x();
Router
  .route('/')
  .get(r => {
    log(r);
    log(r.res);
    r.res.end('йоу');
  });
app
  .use((r, rs, n) => rs.status(200).set(hu) && n())
  .use(x.static('.'))
  .use('/spell', Router)
  .use(({
    res: r
  }) => r.status(404).end('Не-а'))
  .use((e, r, rs, n) => rs.status(500).end(`Ошибка: ${e}`))
  .set('x-powered-by', false);
const s = h1(app)
  .listen(process.env.PORT || PORT, () => log('yo'));