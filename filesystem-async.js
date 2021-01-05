var fs = require('fs')

  async function asyncCall() {
    console.log('calling');
    const result = await getNewLineCount();
    console.log('result');
    // expected output: "resolved"
  }
  
function getNewLineCount(){
    fs.readFile(process.argv[2], 'utf-8', function(err, data){
        console.log("number of enters:"+data.split('\n').length)
    });
}
  
  asyncCall();