(function(ns, Backbone) {
  ns.Views.AppView = Backbone.View.extend({
    el: '.wrapper',

    events: {
      "click #addBtn": "addNote"
    },
    
    initialize: function(){
      this.noteListView = new ns.Views.NotesListView();
    },

    addNote: function() {
      ns.EventBus.trigger({
        target: this,
        type: ns.Events.NoteEvent.ADD
      })
    }
  });
})(this.ns, Backbone);
