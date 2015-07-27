(function(ns, $){
    ns.Commands.UpdateNotesLayout = function(event) {
        $('.notes').isotope( 'prepended', event.get('data'));
    }
})(this.ns, jQuery);