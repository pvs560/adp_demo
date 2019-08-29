const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    console.log("method+url",url+"++"+method);
    if(url == "/"){
        res.setHeader("Content-Type","text/html");
        res.write("<html>");
        res.write("<head><title>Welome to my first Page</title></head>");
        res.write("<body>");
        res.write("<form action='/createuser' method='POST'><input type='text' name='text'/><button type='submit'>createuser</button></form>");
        res.write("</body>");
        res.write("</html>");
        res.end(); 
        return;
    }
    if(url == "/users"){
         res.setHeader("Content-Type", "text/html");
         res.write("<html>");
         res.write("<body>");
         res.write("<ul><li>user1</li><li>user2</li><li>user3</li></ul>");
         res.write("</body>");
         res.write("</html>");
        res.end();
        return;
    }
    if(url === "/createuser"){
       const body = [];
       req.on('data',(chunk)=>{
        body.push(chunk);
       });
       req.on('end',()=>{
           const bodyparsed = Buffer.concat(body).toString();
           console.log(bodyparsed);
       })
       res.statusCode = 302;
       res.setHeader('Location','/');
       res.end();
    }
console.log("serverstarted");
});

server.listen(3000);