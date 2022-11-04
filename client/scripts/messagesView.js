// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.empty();
    Messages.each(this.renderMessage.bind(this));
    //
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // We have to append our message to the $chats using render templet from messageView
    this.$chats.append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};