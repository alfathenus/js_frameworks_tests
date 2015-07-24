(function(ns, $){
    ns.Commands.Helpers.LoadHTMLPartCommand = function(part, callback) {
        $(".innerWrapper").load("parts/" + part + ".html", callback);
    }
})(this.ns, jQuery);