import React from 'react';
import {Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Notes} from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

//export var for noteslist
export const NoteList = (props) => {
  return (
     <div>
       NoteList {props.notes.length}
       <NoteListHeader />
       {/* Render notelistitems to the screen */}
       {/* use mapMethod to cover notes array into jsx array,
       set up key prop equal to _id,
     setup note pop */}
     {props.notes.map((note)=> {
       return <NoteListItem key={note._id} note={note} />
     })}
     NoteList {props.notes.length}
  </div>
);
};

//required prop types
NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

//subscribe to changes in notes
export default createContainer(() => {
  Meteor.subscribe('notes');
//return the array of notes
  return {
    notes: Notes.find().fetch()
  };

}, NoteList);
