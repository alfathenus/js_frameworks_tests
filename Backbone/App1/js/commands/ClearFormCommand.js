(function(ns, $){
    ns.Commands.ClearFormCommand = function(event) {
        $("#title").val("");
        $("#desc").val("");
    }
})(this.ns, jQuery);