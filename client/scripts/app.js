// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);



    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    // EVENT HANDLERS
    $('#chats').on('click', '.username', function(event) {
      let selectedFriend = $(event.currentTarget).text();
      Friends.toggleStatus(selectedFriend);
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // reassign the _data variable in the Messages object to data return from readAll
      Messages.set(data);
    });
    Rooms.set(Messages.get());
    $('select').val(RoomsView.currentRoom);
    // TODO: Use the data to update Messages and Rooms
    // and re-render the corresponding views.
    //call the callback function
    callback();
    //call setTimeout(fetch)
    MessagesView.render(RoomsView.currentRoom);
    setTimeout(App.fetch.bind(this), 1000);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
