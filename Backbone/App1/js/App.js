(function(global, ns, _, Backbone) {
    var App = function() {
        
        this.notes = null;
        this.EventAgregattor = null;
        
        this.init = function() {
            //coleccion de notas
            this.notes = null;

            //EventAgregator patterns
            this.EventAgregattor = _.extend({}, Backbone.Events);

            //Handler de los eventos y bindeo a su command
            this.EventAgregattor.on(ns.Events.NoteEvent.ADD, ns.Commands.AddNoteFromFrontForm);
            //this.EventAgregattor.on("same_event1", ns.Commands.RenderNoteCollection);
        }
    }

    global.App = new App();
})(this, this.ns, _, Backbone);