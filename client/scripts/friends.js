// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  toggleStatus: function (selectedFriend) {
    if (!Friends._data.includes(selectedFriend)) {
      Friends._data.push(selectedFriend);
    } else {
      let index = Friends._data.indexOf(selectedFriend);
      Friends._data.splice(index, 1);
    }
  }
};