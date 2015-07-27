(function(win, global, ns, _, Backbone) {
    var notes = "asdAS";

    function initNotesCollection() {
        this.notes = new ns.Collections.NoteCollection();

        this.notes.reset([{
            id: 1,
            title: "Note 1",
            desc: "Desc Note 1"
        }, {
            id: 2,
            title: "Note 2",
            desc: "This is a long long text with a lot of word that you will think that I'm stupid... yeah, that is right!"
        }]);
    }

    function initCommands() {
        ns.EventBus.on(ns.Events.NoteEvent.ADD, ns.Commands.AddNoteFromFrontForm);
        ns.EventBus.on(ns.Events.NoteEvent.WINDOW_RESIZE, ns.Commands.WindowResizeCommand);
        ns.EventBus.on(ns.Events.NoteEvent.UPDATE_LAYOUT, ns.Commands.UpdateNotesLayout);
        ns.EventBus.on(ns.Events.NoteEvent.UPDATE_NOTES_VIEW, ns.Commands.UpdateNotesListCommand);
        ns.EventBus.on(ns.Events.NoteEvent.CREATE_LAYOUT, ns.Commands.CreateNotesLayout);
        ns.EventBus.on(ns.Events.NoteEvent.CLEAR_FORM, ns.Commands.ClearFormCommand);
    }

    var App = function() {

        this.notes = "hola";

        this.init = function() {
            //self reference
            var self = this;

            // initialize collection with default notes
            initNotesCollection.call(this);
            console.log("lenght: " + this.notes.length);

            // initialize commands
            initCommands.call(this);

            // initialize the app view
            this.appView = new ns.Views.AppView();

            // catch the resize window event
            $(win).resize(function() {
                ns.EventBus.trigger({
                    type: ns.Events.NoteEvent.WINDOW_RESIZE
                });
            });

            // load the defauls modeles to the view
            ns.EventBus.trigger({
                type: ns.Events.NoteEvent.LIST_CHANGE,
                data: this.notes.models
            });
        }

        this.Add = function(data) {
            var ret = null;
            if (data) {
                ret = this.notes.create(data);
            }
            return ret;
        }
    }

    global.App = new App();
})(window, this, this.ns, _, Backbone);
