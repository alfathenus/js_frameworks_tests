(function(ns, Backbone, _) {
    ns.Views.NotesListView = Backbone.View.extend({
        el: ".notes",
        firstTime: true,

        initialize: function() {
            ns.EventBus.on(ns.Events.NoteEvent.LIST_CHANGE, _.bind(this.updateNoteListView, this))
            this.tpl = _.template($('#note-item-tpl').html());
        },

        updateNoteListView: function(event) {
            if (event && event.get("data")) {
                var data = event.get("data");
                var list = [];
                var self = this;
                if (data instanceof Array) {
                    _.each(data, function(model) {
                        list.push(self.addNoteToView(model));
                    });
                }
                else {
                    list.push(this.addNoteToView(data));
                }
            }

            if (this.firstTime) {
                ns.EventBus.trigger({
                    type: ns.Events.NoteEvent.CREATE_LAYOUT
                });
                this.firstTime = false;
            }
            else {
                ns.EventBus.trigger({
                    type: ns.Events.NoteEvent.UPDATE_NOTES_VIEW,
                    data: list
                });
            }
            
            ns.EventBus.trigger({
                    type: ns.Events.NoteEvent.CLEAR_FORM,
                    data: list
                });
        },

        addNoteToView: function(model) {
            var elem = $(this.tpl(model.attributes));
            this.$el.prepend(elem);
            return elem[0];
        }
    });
})(this.ns, Backbone, _);