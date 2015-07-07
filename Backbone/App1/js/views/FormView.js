(function(ns, Backbone) {
    ns.Views.FormView = Backbone.View.extend({
        el: '#formulario',
        events: {
            'click #agregar': function() {
                this.vent.trigger(ns.Events.NoteEvent.ADD, new ns.Models.EventModel({
                    target: this,
                    type: ns.Events.NoteEvent.ADD
                }));
            } //ns.Commands.AddNoteFromFrontForm
        },

        initialize: function(options) {
            this.vent = options.vent;
        },

        //local variables
        vent: null
    });

})(this.ns, Backbone);