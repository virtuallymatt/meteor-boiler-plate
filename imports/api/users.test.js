import expect from 'expect';
import {validateNewUser} from './users';
import { Meteor} from 'meteor/meteor';

if (Meteor.isServer){


describe('Users', function() {

  it('should allow valid email address', function() {
    const testUser = {  //pass in data you want to test
      emails: [
        {address: 'test@example.com'} //test addres is valid
      ]
    };
    const res = validateNewUser(testUser);
    expect(res).toBe(true);
  });
it('should reject invalid email', function(){
  const testUser = {  //pass in data you want to test
    emails: [
      {address: 'test@example.com'} //test addres is valid
    ]
  };
  expect(() => {
    validateNewUser(testUser);
  }).toThrow();
})
});
}






// const add = (a,b) => {
// if (typeof b !== 'number' ) {
//   return a + a;
// }
//   return a + b;
// };
//
// it('should add two numbers', function() {
//   const res = add(10, 12);
//
// if (res !== 22) {
//   throw new Error('didnt add up');
// }
// });
//
//
// it ('should double a number', function() {
//   const res = add(44);
//
//   if(res !== 88 ) {
//     throw new Error('didnt double');
//   }
//
// });
