const Cryptr = require("cryptr");
const cryptr = new Cryptr('AH15GA165R');

module.exports = {

  encryptPassword(password) {
    return cryptr.encrypt(password);
  },

  decryptPasswrod(encryptedPassword) {
    return cryptr.decrypt(encryptedPassword);
  }

}
