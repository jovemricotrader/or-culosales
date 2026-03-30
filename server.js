const http=require('http'),fs=require('fs'),path=require('path');
const PORT=process.env.PORT||3000;
http.createServer((req,res)=>{
  res.setHeader('X-Frame-Options','SAMEORIGIN');
  res.setHeader('X-Content-Type-Options','nosniff');
  fs.readFile(path.join(__dirname,'fim-das-opcoes.html'),(err,data)=>{
    if(err){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.end(data);
  });
}).listen(PORT,()=>console.log('JR ORACULO SITE :'+PORT));
