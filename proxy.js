const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer(async (req, res) => {
  const proxyUrl = 'http://120.26.221.156/API/HostCD/latest'; // 目标API的地址
  const url = `${proxyUrl}${req.url}`;

  const response = await fetch(url);
  const data = await response.json();

  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*', // 设置允许的域，可以是具体的域名或通配符*
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(data));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
