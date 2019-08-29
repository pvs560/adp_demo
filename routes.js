const fs = require('fs');
const handleRoutes = (req,res) =>{
 console.log(req.url, req.method, req.headers);
 const url = req.url;
 const method = req.method;
 if (url === '/') {
     res.setHeader('Content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>My First Page in Node</title></head>');
     res.write('<body><form action="/message" method="POST"><input type="text" name="text"/><button type="submit">send</button></form></body>');
     res.write('</html>');
     return res.end();
 }
 if (url === '/message' && method === 'POST') {
     const body = [];
     req.on('data', (chuck) => {
         console.log(chuck);
         body.push(chuck);
     });
     return req.on('end', () => {
         const parsedBody = Buffer.concat(body).toString();
         console.log(parsedBody);
         fs.writeFile("message.txt", parsedBody.split("=")[1], err => {
             res.statusCode = 302;
             res.setHeader('Location', '/');
             res.end();
         });
     })
     //  res.statusCode = 302;
     //  res.setHeader('Location', '/');
     //  return res.end();
 }
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><title>My First Page in Node</title></head>');
 res.write('<body><h1>Hello from my nodejs server</h1></body>')
 res.write('</html>');
 res.end();
}

module.exports = handleRoutes;