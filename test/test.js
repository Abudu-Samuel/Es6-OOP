import { assert } from 'chai';
import { Staff, Manager } from '../src/main';

const staff1 = new Staff('John', 'Doe', 'male', 10000, 21, 'library', 'married');
const manager1 = new Manager('Lucy', 'Cage', 'female', 500, 45, 'records', 'single', 'gossiping');
describe('Staff', () => {
  describe('staff info', () => {
    it('should return John Doe male 10000 21 library married', () => {
      assert.equal(staff1.getstaffInfo(), 'John Doe male 10000 21 library married');
    });
    it('should return my monthly tax is #2000', () => {
      assert.equal(staff1.gettax(), 'my monthly tax is #2000');
    });
    it('should return my Hi guys, my name is Lucy Cage, I\'m Single and searching. My basic salary is #500 I\'m 45 years old, i work in records department. My hobby is gossiping lol', () => {
      assert.equal(manager1.getstaffInfo(), 'Hi guys, my name is Lucy Cage, I\'m Single and searching. My basic salary is #500 I\'m 45 years old, i work in records department. My hobby is gossiping lol');
    });
    it('should return my monthly tax is #100', () => {
      assert.equal(manager1.gettax(), 'my monthly tax is #100');
    });
  });
});
