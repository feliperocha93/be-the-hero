const bcrypt = require('bcrypt');
const saltRounds = 2;

module.exports = {

  encryptPassword(password) {
    return bcrypt.hashSync(password, saltRounds);
  },

  comparePasswrod(password, encryptedPassword) {
    return bcrypt.compareSync(password, encryptedPassword);
  }

}
