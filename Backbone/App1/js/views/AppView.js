(function(ns, Backbone) {
  /**
   * This is the main view of the application.
   * It creates the View to manage the notes list.
   */
  ns.Views.AppView = Backbone.View.extend({
    // The main element of the application
    el: '.wrapper',
  
    // Events listeners
    events: {
      "click #addBtn": "addNoteButtonHandler"
    },
    
    /**
     * @constructor
     */
    initialize: function(){
      this.noteListView = new ns.Views.NotesListView();
    },
    
    /**
     * Handler for the button "Add Note". It notify to the EventBus that
     * there is a new note to add.
     * 
     * @method AddNoteButtonHandler
     */ 
    addNoteButtonHandler: function() {
      ns.EventBus.trigger({
        target: this,
        type: ns.Events.NoteEvent.ADD
      })
    }
  });
})(this.ns, Backbone); //dependencies
