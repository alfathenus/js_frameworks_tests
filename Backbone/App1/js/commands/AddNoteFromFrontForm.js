(function(ns, App, Backbone) {
    ns.Commands.AddNoteFromFrontForm = function(event) {
        var target = event.get("target");

        App.notes.add({
            titulo: target.$('#titulo').val(),
            desc: target.$('#descripcion').val()
        });

        console.log(App.notes.toJSON());
    }
})(this.ns, this.App, Backbone);