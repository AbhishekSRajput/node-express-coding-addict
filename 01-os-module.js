const os = require('os');
const { cpuUsage } = require('process');
//method about current user
const user = os.userInfo();
console.log(user);
//method returns user uptime in seconds
console.log(`my computer is running for: ${os.uptime} seconds`);

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};

console.log(currentOs);
