import React from 'react';
import moment from 'moment';

//render one time for each note item
const NoteListItem = (props) => {
  return (
    <div>
      <h5>{props.note.title || 'Untitle note'}</h5> {/* render the note title  */}
      <p>{moment(props.note.updatedAt).format('M/DD/YY')}</p> {/* get time and format with moment */}
    </div>
  );
};

//setup required props
NoteListItem.propTypes = {
  note: React.PropTypes.object.isRequired
};

export default NoteListItem
