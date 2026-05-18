const fs = require("fs");

const name =
process.argv[2];

const path =
process.env.HOME +
"/mintbot-license/whitelist.json";

const data =
JSON.parse(
fs.readFileSync(path)
);

if(!name){

console.log(
data.users
);

process.exit();

}

if(data.users[name]){

console.log(
name + " = " +
data.users[name]
);

}else{

console.log(
"NOT FOUND"
);

}
