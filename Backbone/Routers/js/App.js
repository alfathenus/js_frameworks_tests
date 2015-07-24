(function(global, ns, _, Backbone, $) {
    var App = function() {
        
        this.init = function() {
            
            // initialize App Routers
            var router = new global.ns.Routers.AppRouter();
            
            // initialize History
            Backbone.history.start();
            
            // check if no route on load then call home
            var fragment = Backbone.history.getFragment();
            if (!fragment) {
                router.navigate("home", {trigger: true});
            }
            
            // create the view
            new ns.Views.FaceView();
        }
    }

    global.App = new App();
})(this, this.ns, _, Backbone, jQuery);