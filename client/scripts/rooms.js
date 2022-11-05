// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  /*
    set take in the Messages._data
      map that data, getting roomNames
      filter, make sure its not undefined, null
      _.uniq
  */
  set: function(messagesArr) {
    let newData = messagesArr.map(message => {
      return { roomname: message.roomname };
    }).filter(roomnameObj => roomnameObj.roomname !== undefined && roomnameObj.roomname !== null);
    newData = _.uniq(newData, (roomObj) => roomObj.roomname);
    if (!_.isEqual(newData, this._data)) {
      this._data = newData;
      RoomsView.render();
    }
  },

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  /* roomObj {
    name: 'someString'
    isSelected: false
  } */
  add: function(roomname) {
    let messObj = {
      username: App.username,
      text: `${roomname} has been added!`,
      //TODO add roomname
      roomname: roomname
    };
    Parse.create(messObj);
  },

  get: function() {
    return this._data;
  }

};