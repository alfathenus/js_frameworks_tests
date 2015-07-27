(function(ns, Backbone) {
    ns.Views.FormView = Backbone.View.extend({
        el: '#formulario',
        events: {
            'click #agregar': function() {
                Backbone.Events.trigger(ns.Events.NoteEvent.ADD, new ns.Models.EventModel({
                    target: this,
                    type: ns.Events.NoteEvent.ADD
                }));
            }
        }
    });

})(this.ns, Backbone);