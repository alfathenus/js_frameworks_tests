(function(ns, $){
    
    function callback(response, status) {
        if (status == "error") {
            console.error("Error loading html part 'About'");
        } else {
            console.info("'About' HTML part loaded successully");
        }
    }
    
    ns.Commands.RouterAboutCommand = function(){
        ns.Commands.Helpers.LoadHTMLPartCommand("about", callback)
    }
    
})(this.ns, jQuery);