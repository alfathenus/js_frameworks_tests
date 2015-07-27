(function(win, $, ns, app) {

    function updateheight() {
        var w1 = $(win).height() - $('.header').height() - $('footer').height();
        var w2 = $(".aa").height();
        if (w1 > w2) {
            $(".sidebar").css("height", w1);
        } else {
            $("footer").removeClass("navbar-fixed-bottom");
            $(".sidebar").css("height", w2);
        }
    }

    $(function() {
        //sort notes
        $('.notes').isotope({
            itemSelector: '.item'
        });
        
        // update the height of the sidebar
        updateheight();
        $(win).resize(function() {
            updateheight();
        });
        
        // initialize App
        app.init();
    });
})(window, jQuery, this.ns, this.App);