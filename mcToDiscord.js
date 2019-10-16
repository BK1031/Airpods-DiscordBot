exports.run = (client, dupe, veriEnmap, sendMessage) => {
    // mc to discord
    if (true) {
      try {
        const http = require('http');
  
        const regex = new RegExp('\\[Server thread/INFO\\]: <([^>]*)> (.*)');
  
        const server = http.createServer(function(request, response) {
          console.dir(request.param);
  
          if (request.method == 'POST') {
            var body = '';
            request.on('data', function(data) {
              body += data;
            });
            request.on('end', function() {
              const regBody = body.match(regex);
              const username = regBody[1].replace(/(§[A-Z-a-z0-9])/g, '');
              const message = regBody[2];
              response.writeHead(200, { 'Content-Type': 'text/html' });
              response.end(username + ': ' + message);
              sendMessage('mc-channel', '<' + username + '> ' + message);
            });
          }
        });
  
        let port = Number(25575);
        const host = "35.227.157.239";
  
        server.listen(port, host);
        client.console(`MC --> Discord | Listening at http://${host}:${port}`.green);
      } catch (error) {
        client.console(`MC --> Discord | Disabled! ${error}`.green);
      }
    } else {
      client.console(`MC --> Discord | Disabled!`.green);
    }
  };
  