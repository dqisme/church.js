var Abstraction = require('../src/Abstraction');
var Variable = require('../src/Variable');
var LambdaTerm = require('../src/LambdaTerm');

describe('Abstraction', function () {

  it('should be a function', function () {
    expect(Abstraction).to.be.a('function');
  });

  it('should can be constructed with its content', function () {
    var content = '&x.x';
    var abstraction = new Abstraction(content);
    expect(abstraction).to.have.property('content');
    expect(abstraction).to.have.property('valid');
    expect(abstraction.content).to.be.equal(content);
  });

  it('should be invalid when constructed with a non-abstraction content', function () {
    var nonAbstractionContent = 'x';
    var abstraction = new Abstraction(nonAbstractionContent);
    expect(abstraction.valid).to.be.false;
  });

  it('should have a bound variable when constructed with a abstraction', function () {
    var abstractionContent = '&x.x';
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction).to.have.property('boundVariable');
  });

  it('should have a bound variable which can be constructed by variable', function () {
    var boundVariableContent = 'x';
    var abstractionContent = '&' + boundVariableContent + '.y';
    var boundVariable = new Variable(boundVariableContent);
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.boundVariable).to.be.eql(boundVariable);
  });

  it('should have a body when constructed with a abstraction', function () {
    var bodyContent = 'y';
    var abstractionContent = '&x.' + bodyContent;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction).to.have.property('body');
  });

  it('should have a body which is a lambda term when constructed with a abstraction', function () {
    var bodyContent = 'y';
    var abstractionContent = '&x.' + bodyContent;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(LambdaTerm);
  });

  it('should have a body which is a variable when constructed with a abstraction', function () {
    var bodyContentAsVariable = 'y';
    var abstractionContent = '&x.' + bodyContentAsVariable;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(Variable);
    var bodyAsVariable = new Variable(bodyContentAsVariable);
    expect(abstraction.body).to.be.eql(bodyAsVariable);
  });

  it('should have a body which is a abstraction when constructed with a abstraction', function () {
    var bodyContentAsAbstraction = '&x.y';
    var abstractionContent = '&x.' + bodyContentAsAbstraction;
    var abstraction = new Abstraction(abstractionContent);
    expect(abstraction.body).to.be.an.instanceOf(Abstraction);
    var bodyAsVariable = new Abstraction(bodyContentAsAbstraction);
    expect(abstraction.body).to.be.eql(bodyAsVariable);
  });
});
