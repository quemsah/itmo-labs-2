/ const request = require('request');
// let smth = {
// name: "%D1%82%D0%B5%D1%81%D1%82",
// fname: "%D1%82%D0%B5%D1%81%D1%82"
// }
// request({
// url: "http://kodaktor.ru/api/req/?name=тест&fname=тест",
// method: "POST",
// json: true,
// headers: {
// "content-type": "application/x-www-form-urlencoded"
// },
// body: JSON.stringify(smth)
// }, function (err, res, body) {
// if (err) {
// console.log('Error :', err);
// return null;
// }
// console.log(' Res :', res)
// console.log(' Body :', body)
// });
// curl "https://fork.kodaktor.ru/mystery?oooole-lukoie" -d https://raw.githubusercontent.com/GossJS/node_starter.. -H "content-type: multipart/form-data"
// curl "https://fork.kodaktor.ru/mystery?oooole-lukoie" -d https://raw.githubusercontent.com/GossJS/node_starter.. -H "content-type: :application/x-www-form-urlencoded"
// curl -X POST -H 'Content-Type: application/json' -d '{"name":"%D1%82%D0%B5%D1%81%D1%82","fname":"%D1%82%D0%B5%D1%81%D1%82"}' http://kodaktor.ru/api/req/first/second
// curl -X POST -H 'Content-Type: application/json' -d http://kodaktor.ru/api/req/тест/тест
// curl "http://kodaktor.ru/api/req/тест/тест"
// console.log(encodeURIComponent('Евгений'));
// %D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9
// %D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2



telnet 151.248.115.32 80
POST /api/req/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2 HTTP/1.1
Host: kodaktor.ru
Content-Type:application/x-www-form-urlencoded
Content-Length:89

name=%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9&familyname=%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2
-i -X POST 
curl -i -X POST https://kodaktor.ru/api/req?name=%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9&fname=%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2 -d "name=%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9&familyname=%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2" -H "content-type: :application/x-www-form-urlencoded"