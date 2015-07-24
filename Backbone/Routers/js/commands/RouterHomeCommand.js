(function(ns, $){
    
    function callback(response, status) {
        if (status == "error") {
            console.error("Error loading html part 'Home'");
        } else {
            console.info("'Home' HTML part loaded successully");
        }
    }
    
    ns.Commands.RouterHomeCommand = function(){
        ns.Commands.Helpers.LoadHTMLPartCommand("home", callback)
    }
    
})(this.ns, jQuery);