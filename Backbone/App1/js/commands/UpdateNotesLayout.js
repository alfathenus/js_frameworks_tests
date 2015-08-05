(function(ns, $){
    ns.Commands.UpdateNotesLayout = function(event) {
        if(event.get('data').type == "add") {
            $('.notes').isotope( 'prepended', event.get('data').data);
        } else {
            $('.notes').isotope( 'remove', event.get('data').data).isotope('layout');
        }
    }
})(this.ns, jQuery);