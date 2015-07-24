(function(ns, $){
    
    function callback(response, status) {
        if (status == "error") {
            console.error("Error loading html part 'Search'");
        } else {
            console.info("'Search' HTML part loaded successully");
        }
    }
    
    ns.Commands.RouterSearchCommand = function(){
        ns.Commands.Helpers.LoadHTMLPartCommand("search", callback)
    }
    
})(this.ns, jQuery);