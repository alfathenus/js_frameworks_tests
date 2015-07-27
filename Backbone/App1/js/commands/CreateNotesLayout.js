(function(ns, $){
    ns.Commands.CreateNotesLayout = function(event) {
        $('.notes').isotope({
            itemSelector: '.item'
        });
    }

})(this.ns, jQuery);