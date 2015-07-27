(function(ns, App, Backbone, $) {
    ns.Commands.AddNoteFromFrontForm = function(event) {

        var target = event.get("target") || new {
            $: $
        };

        var newModel = App.Add({
            title: target.$('#title').val(),
            desc: target.$('#desc').val()
        });

        if (newModel) {
            ns.EventBus.trigger({
                target: target,
                data: newModel,
                type: ns.Events.NoteEvent.LIST_CHANGE
            });
        }
        else {
            // manage error!
        }
    }
})(this.ns, this.App, Backbone, jQuery);