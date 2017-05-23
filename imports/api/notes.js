import { Mongo } from 'meteor/mongo';
import { Metoer } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

//create new mongo collection
export const Notes = new Mongo.Collection('notes');

//subscribe and publish the notes db collection
if(Meteor.isServer) {
  Meteor.publish('notes', function () {
    return Notes.find({userId: this.userId});
  }); //show nots where they belong to the user
}

//create methods for interaction
Meteor.methods({
//create insert note to db
  'notes.insert'() {
    if (!this.userId) { //if not loggedin
      throw new Meteor.Error('not-authorised');
    }
//otherwise insert a note with props
    return Notes.insert({
      title: '',
      body: '',
      userId: this.userId,
      updatedAt: moment().valueOf()
    });
  },
  //remove a note
  'notes.remove'(_id){
    if (!this.userId){
      throw new Meteor.Error('not-authorised');
    }

//validate
    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate ({_id});
Notes.remove({ _id, userId: this.user.Id});
},

'notes.update'(_id, updates) {
  if (!this.userId) { //if not loggedin
    throw new Meteor.Error('not-authorised');
  }

  new SimpleSchema ({
    _id: {
      type: String,
      min: 1
    },
    title: {
      type: String,
      optional: true
    },
    body: {
      type: String,
      optional: true
    }
  }).validate({
    _id,
    ...updates   //spread updates to account for title and body
  });
  Notes.update(_id, {
    $set: {
      updatedAt: moment().valueOf(),
      ...updates
    }
  })//


  }
});
