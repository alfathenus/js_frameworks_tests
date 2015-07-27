(function(win, ns, $) {
    ns.Commands.WindowResizeCommand = function(event) {
        // space between header and footer
        var w1 = $(win).height() - $('.header').height() - $('footer').height();
        // height of the notes cards container
        var w2 = $(".aa").height();
        //  height of the sidebar form
        var w3 = $(".sidebar").height();
        
        if(w2 >= w1 && w2 >= w3) {
            // the cards container is the highest
            $(".sidebar").css("height", w2);
            $("footer").removeClass("navbar-fixed-bottom");
        } else if (w1 >= w2 && w1 > w3) {
            // the space between header and fotter is the highes
            $(".sidebar").css("height", w1);
            if(!$("footer").hasClass("navbar-fixed-bottom")) {
                $("footer").addClass("navbar-fixed-bottom");
            }
        } else {
            // the sidebar is the highest
            $(".sidebar").css("height", w3);
            $("footer").removeClass("navbar-fixed-bottom");
        }
    }
})(window, this.ns, jQuery);