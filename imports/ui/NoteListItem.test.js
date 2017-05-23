//test notelist item
import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {Meteor} from 'meteor/meteor';
import NoteListItem from './NoteListItem';

//make sure on client

if (Meteor.isClient) {
  descirbe ('NoteListItem', function() {
//first test
    it('should render title and time stamp', function (){
      const title = 'my title here'; //create props
      const updatedAt = 1486137505429;
      const wrapper = mount(<NoteListItem note={{title, updatedAt}} /> );
//expect the title to be title
      expect(wrapper.find('h5').text()).toBe(title);
        expect(wrapper.find('p').text()).toBe('2/03/17');
    });
  });
}
