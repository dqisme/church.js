var LambdaTerm = require('./LambdaTerm');

var Identifier = function (content) {
  this.content = content;
  try {
    if (!this.form.test(content)) {
      throw new Error('content is NOT a identifier');
    }
  } catch (e) {
    if(e) {
      this.error = e;
    }
  }
};

var identifierForm = /^[a-zA-Z]+$/;
Identifier.prototype = new LambdaTerm(identifierForm);

module.exports = Identifier;
