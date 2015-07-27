(function(global, ns, _, Backbone) {
    var notes = "asdAS";
    var App = function() {

        this.notes = "hola";

        this.init = function() {
            //self reference
            var self = this;

            //coleccion de notas
            this.notes = new ns.Collections.NoteCollection();

            this.notes.reset([{id:1, titulo:"Note 1", desc:"Desc Note 1"},
                              {id:2, titulo:"Note 2", desc:"This is a long long text with a lot of word that you will think that I'm stupid... yeah, that is right!"}]);

            console.log("lenght: " + this.notes.length);

            /*
            //broadcast collection changes
            function broadcast() {
                Backbone.Events.trigger(ns.Events.NoteEvent.LIST_CHANGE, new ns.Models.EventModel({
                    type: ns.Events.NoteEvent.LIST_CHANGE,
                    data: self.notes
                }));
            }

            //Adds handlers for the events on EventBus/Event Aggregator.
            Backbone.Events.on(ns.Events.NoteEvent.ADD, ns.Commands.AddNoteFromFrontForm);
            this.notes.on({
                "add": broadcast,
                "remove": broadcast
            });
*/
            //Add the AppView

            this.appView = new ns.Views.AppView();
        }

       /* this.Add = function(data) {
            if (data) {
                this.notes.add(data);
            }
        }*/
    }

    global.App = new App();
})(this, this.ns, _, Backbone);
