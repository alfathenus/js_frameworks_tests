(function(ns, App) {
    ns.Commands.RemoveNoteCommand = function(event) {
        App.remove(event.get('data'));
    }
})(this.ns, this.App); //dependencies