(function(win, $, ns, app, Backbone) {

    $(function() {
        // backbone inspector (chrome extension)
        if (window.__backboneAgent) {
            window.__backboneAgent.handleBackbone(Backbone);
        }

        app.init();
    });
})(window, jQuery, this.ns, this.App, Backbone);