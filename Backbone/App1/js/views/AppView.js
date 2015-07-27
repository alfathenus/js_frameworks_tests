(function(ns, Backbone){
    ns.Views.AppView = Backbone.View.extend({
      events: {
        "click #addBtn": "addNote"
      },
        initialize: function(){
            //this.formView = new ns.Views.FormView();
            //this.notesListView = new ns.Views.NotesListView();
        },
        addNote:function(){
          console.log("hola");
        }
    });
})(this.ns, Backbone);
