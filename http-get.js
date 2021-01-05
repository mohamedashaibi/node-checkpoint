var http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', function(response){
    response.on('data', function(data){
        console.log("data : "+ data)
    })
    response.on('error', function(error){
        console.log("error : "+ error)
    })
})