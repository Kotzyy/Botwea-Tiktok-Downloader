const fs = require('fs')
let authofile = './session.json'
cmd.on("qr", () => {
	console.log("Scan QR")
})
cmd.on("open", () => {
	console.log("Open")
	const authInfo = cmd.base64EncodedAuthInfo();

	fs.writeFileSync(authofile, JSON.stringify(authInfo, null, "\t"))		
})

fs.existsSync("./session.json") && cmd.loadAuthInfo(authofile); 

cmd.connect()
cmd.logger.level = 'warn'
cmd.browserDescription = ['Wabot','Safari','3.0'];