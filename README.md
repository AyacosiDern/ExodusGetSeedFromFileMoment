# ExodusGetSeedFromFileMoment
Getting seed from exodus seed.seco

const Exodus = require("./Exodus")
console.log(Exodus.decrypt(fs.readFileSync("./seed.seco"), ["test", "five", "123456"]) // If wallet don't have password then password is in passphrase.json
