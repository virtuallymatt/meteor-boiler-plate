import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

//create notelistheader component
export const NoteListHeader = (props) => {
  return (
    <div> {/*render a button to the screen to create notes*/}
      <button onClick={() => { //create onClick handler
        props.meteorCall('notes.insert') //call notes.insert
      }}>Create Note</button>
    </div>
  );
};

NoteListHeader.propTypes = {
  meteorCall: React.PropTypes.func.isRequired
};

//render container component in notes list

export default createContainer(() => {
  //pass in meteor.call
  return {
meteorCall: Meteor.call  //call a meteor method
  };
}, NoteListHeader);
