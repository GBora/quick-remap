import { quickMapping } from './index';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('My simple mapping library', () => {

  it('should map keys correctly' , () => {
    let source = { foo: 5, foo2: 10 };
    let final = quickMapping(source, {"foo":"bar"});
    expect(final["bar"]).to.equal(5);
  });

  it('keys not remaped should still exist' , () => {
    let source = { name: "John", lastName: "Smith" };
    let final = quickMapping(source, {"name":"firstName"});
    expect(final["lastName"]).to.equal("Smith");
  });

  it('keys deleted should no longer exist' , () => {
    let source = { name: "John", lastName: "Smith", "clientId": 1 };
    let final = quickMapping(source, {"name":"firstName"}, ["clientId", "age"]);
    expect(final["clientId"]).to.not.exist;
  });

  it('work on arrays' , () => {
    let source = [{ name: "John", lastName: "Smith", "clientId": 1 }, { name: "George", lastName: "Smith", "clientId": 2 }];
    let final = source.map(c => quickMapping(c, {"name":"firstName"}))
    expect(final[1]["firstName"]).to.equal("George");
  });

});