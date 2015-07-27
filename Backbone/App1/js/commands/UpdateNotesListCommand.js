(function(ns){
    ns.Commands.UpdateNotesListCommand = function(event) {
        ns.Commands.UpdateNotesLayout(event);
        ns.Commands.WindowResizeCommand(event);
    }
})(this.ns);