var fs = require('fs');

var path = process.argv[2]

fs.readdir(path, function(err, list){
   
    var s = list;
    s.forEach((item)=>{
        var k = item.split('.')[1];
        if(k==process.argv[3]){
            console.log(item)
        }
        
    })
    
})