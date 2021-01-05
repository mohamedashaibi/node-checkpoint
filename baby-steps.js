var args = process.argv
args.shift()
args.shift()
sum = 0;
for(let i = 0; i<args.length;i++){
    sum += parseInt(args[i]);
}
console.log(sum)