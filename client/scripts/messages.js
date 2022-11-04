// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // add function that takes in an object
  // pushes to the _data array
  set: function(arr) {
    this._data = arr;
  },
  //getByRoom function with string( roomname ) as argument
  //returns an array of messages that are in that room
  // if no roomname is given, then it would default to lobby.

  getByRoom: function(roomName = 'lobby') {
    return this._data.filter(message => {
      return message.roomname === roomName;
    });
  },

  each: function(callback) {
    for (let message of this._data) {
      callback(message);
    }
  }
};

/*
var message = {
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
};
*/