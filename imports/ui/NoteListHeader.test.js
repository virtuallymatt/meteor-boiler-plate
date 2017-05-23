import react from 'react';
import expect from 'expect';
import {mount} from 'Enzyme';
import {Meteor} from 'meteor/meteor';
import {NoteListHeader} from './NoteListHeader';

//if on client setup describe block
if (Meteor.isClient) {
describe('NoteListHeader', function() {

  it('should call MeteorCall on click', function (){
    const spy = expext.createSpy();
    const wrapper = mount( <NoteListHeader meteorCall={spy}/>);
//simulate spy on the button click
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalledWith('notes.insert'); //check all arguments
  });
});
}
