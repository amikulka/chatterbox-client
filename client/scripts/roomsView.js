// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: 'lobby',

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    Rooms.set(Messages.get());

    this.$button.on('click', RoomsView.handleClick);
    this.$select.on('change', RoomsView.handleChange);


    this.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // empty select element in html
    this.$select.empty();
    Rooms.get().forEach(room => {
      RoomsView.renderRoom(room);
    });
  },

  rendering: _.template(`
  <option value="<%-roomname%>"><%-roomname%></option>
  `),

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    if (typeof roomname === 'string') {
      roomname = { roomname: roomname };
    }
    this.$select.append(RoomsView.rendering(roomname));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    RoomsView.currentRoom = $('select').val();
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // invoke the Rooms.add function with the value from the text input from the input with the #roomname

    Rooms.add($('#roomname').val());
    RoomsView.currentRoom = $('#roomname').val();
    $('#roomname').val('');

  }

};
