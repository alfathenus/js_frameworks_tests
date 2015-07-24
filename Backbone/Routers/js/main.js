(function(win, $, Backbone, App) {
    
    function updateheight() {
        $('.main, .contentWrapper').css('height', $(win).height());
    }
    
    $(function() {
        
        // update height of some html elements on load and on resize
        updateheight();
        $(win).resize(function() {
            updateheight();
        });

        // initialize the application
        App.init();
    })

})(window, jQuery, Backbone, App);