const fs = require("fs");

const args = process.argv.slice(2);

if(args.length < 2 || args.length % 2 !== 0){

console.log(
"Usage: addwl name address [name address...]"
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

for(let i = 0; i < args.length; i += 2){

const name = args[i];
const address = args[i + 1];

data.users[name] = address;

console.log(
"WL ADDED:",
name,
address
);

}

fs.writeFileSync(
path,
JSON.stringify(data, null, 2)
);
