var app = require('express')();
var http = require('http').Server(app);

// membuat intances socket io berdasarkan http instances diatas, http instances dibuat berdasarkan rules express
var socketApp = require('socket.io')(http)

// endpoint 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

socketApp.on('connection', (socket) => {
    console.log('new user connect');
})

// var port = process.env.port || 3000;
// app.listen(port, (err)=>{
//     console.log('running on port: ' + port);  
// });

http.listen(3000,function(){
    console.log('App running on port 3000')
})