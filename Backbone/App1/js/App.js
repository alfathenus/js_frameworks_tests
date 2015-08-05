(function(win, global, ns, _, Backbone) {

    /**
     * Add the default notes to the collection
     */
    function initNotesCollection() {
        this.add({
            title: "Note 1",
            desc: "Desc Note 1"
        });
        this.add({
            title: "Note 2",
            desc: "This is a long long text with a lot of word that you will think that I'm stupid... yeah, that is right!"
        });
    }

    /**
     * Initialize the commands and listeners on the EventBus
     */
    function initCommands() {
        ns.EventBus.on(ns.Events.NoteEvent.ADD, ns.Commands.AddNoteFromFrontForm);
        ns.EventBus.on(ns.Events.NoteEvent.REMOVE, ns.Commands.RemoveNoteCommand);
        ns.EventBus.on(ns.Events.NoteEvent.WINDOW_RESIZE, ns.Commands.WindowResizeCommand);
        ns.EventBus.on(ns.Events.NoteEvent.UPDATE_LAYOUT, ns.Commands.UpdateNotesLayout);
        ns.EventBus.on(ns.Events.NoteEvent.UPDATE_NOTES_VIEW, ns.Commands.UpdateNotesListCommand);
        ns.EventBus.on(ns.Events.NoteEvent.CREATE_LAYOUT, ns.Commands.CreateNotesLayout);
        ns.EventBus.on(ns.Events.NoteEvent.CLEAR_FORM, ns.Commands.ClearFormCommand);
    }

    /**
     * @class
     * @description Application object.
     */
    var App = function() {
        // the Notes Collection
        var notes = new ns.Collections.NoteCollection();

        /**
         * @constructor
         */
        this.init = function() {

            // initialize collection with default notes
            initNotesCollection.call(this);

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
                data: notes.models
            });

            // trigger windows resize event to set the layout
            ns.EventBus.trigger({
                type: ns.Events.NoteEvent.WINDOW_RESIZE
            });
        };

        /**
         * Creates a new model from the data recived by param and add it 
         * to the notes collection.
         * 
         * @method add
         * @param data The object with the properties of the model (NoteModel)
         * @return A reference to the new model added to the collection.
         */
        this.add = function(data) {
            var ret = null;
            if (data) {
                ret = notes.create(data);
            }
            return ret;
        };

        /**
         * Remove an item from the collection.
         * 
         * @method remove
         * @param data The id of the model to remove or the model.
         */
        this.remove = function(data) {
            notes.remove(data);
        };
    };

    global.App = new App();
})(window, this, this.ns, _, Backbone);
