const bcrypt = require('bcryptjs');

const hashPass = (pass) => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(pass, salt);
  return hash;
}

const comparePass = (input, passwordDb) => {
  return bcrypt.compareSync(input, passwordDb);
}

module.exports = {hashPass, comparePass};