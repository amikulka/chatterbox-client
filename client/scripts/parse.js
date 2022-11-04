// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: unable to post message', error);
      }
    });

  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
/*

DATA WE RECIEVE BACK FROM Parse.readAll
it is an array of objects filled with =>
{
  campus: "rfe",
  created_at: "2022-09-18T16:42:30.406Z"
  github_handle: "gabeyamartino"
  message_id: 76777
  roomname: ""
  text: ""
  updated_at: "2022-09-18T16:42:30.406Z"
  username: "gabe"
}
*/