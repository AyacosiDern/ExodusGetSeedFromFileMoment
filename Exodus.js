const fs = require("fs");
const seco = require("seco-file");
const zlib = require("zlib");
const bs = require("bitcoin-seed");

class Exodus 
{
    static shrink(e){
        const t = e.readUInt32BE(0);
        return e.slice(4,t+4)
    }

    static decrypt(seedSeco, passwords){
        
            for (const password of passwords) {
                try{
                    let decrypted = seco.decryptData(seedSeco, password).data;
                    let shrinked = this.shrink(decrypted);
                    let gunzipped = zlib.gunzipSync(shrinked);
                    let mnemonic = bs.fromBuffer(gunzipped).mnemonicString;

                    return mnemonic;
                }
                catch {
                }
            }
            
            return null;
    }
}

module.exports = Exodus;