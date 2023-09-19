const { log } = require("console");
const os = require("os"); // os  - operation sistem

// info about current user

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`the System Uptime is ${os.uptime()} seconds`);

const currenrOs = {
  name: os.type(),
  rellease: os.release(),
  totalMen: os.totalmem(),
  freeMen: os.freemem(),
};

console.log(currenrOs);
