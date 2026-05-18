const fs = require("fs");

const names =
process.argv.slice(2);

if(names.length === 0){

console.log(
"Usage: rmwl name [name...]"
);

process.exit();

}

const path =
process.env.HOME +
"/mintbot-license/whitelist.json";

const data =
JSON.parse(
fs.readFileSync(path)
);

for(const name of names){

if(data.users[name]){

delete data.users[name];

console.log(
"WL REMOVED:",
name
);

}else{

console.log(
"NOT FOUND:",
name
);

}

}

fs.writeFileSync(
path,
JSON.stringify(data, null, 2)
);
