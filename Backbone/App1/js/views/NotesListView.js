(function(ns, Backbone, _) {
    /**
     * This view manage all the user interaction on the list of Notes.
     */
    ns.Views.NotesListView = Backbone.View.extend({
        el: ".notes",
        firstTime: true,

        // UI event that manage
        events: {
            "click .deleteNote": "removeNoteFromViewHandler",
            "click .editNote": "editHandler"
        },

        /**
         * @constructor
         */
        initialize: function() {
            ns.EventBus.on(ns.Events.NoteEvent.LIST_CHANGE, _.bind(this.addNotesHandler, this));
            this.tpl = _.template($('#note-item-tpl').html());
        },

        editHandler: function(btn) {
            $(btn.target).parent().parent().toggleClass('flipped');
        },
        /**
         * Handler for the delete icon on each note on UI.
         * 
         * @method removeNoteFromViewHandler
         * @param ev Click event
         */
        removeNoteFromViewHandler: function(ev) {
            var elem = $(ev.target).parent();
            var id = elem.attr("id-model");
            elem.remove();

            ns.EventBus.trigger({
                type: ns.Events.NoteEvent.UPDATE_NOTES_VIEW,
                data: {
                    data: elem,
                    type: 'remove'
                }
            });

            ns.EventBus.trigger({
                type: ns.Events.NoteEvent.REMOVE,
                data: id
            });
        },

        addNotesHandler: function(event) {
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
                    data: {
                        data: list,
                        type: "add"
                    }
                });
                ns.EventBus.trigger({
                    type: ns.Events.NoteEvent.CLEAR_FORM,
                    data: list
                });
            }
        },

        addNoteToView: function(model) {
            var elem = $(this.tpl(model.attributes));
            elem.attr("id-model", model.id);
            this.$el.prepend(elem);
            elem.find(".back").css("height", elem.find(".front").css("height"));
            return elem[0];
        }
    });
})(this.ns, Backbone, _);