(function(ns, Backbone) {
        var router = Backbone.Router.extend({
                routes: {
                    "home": "home", // #help
                    "search/:query": "search",
                    "about": "about" // #search/kiwis/p7
                },

                home: function() {
                    ns.Commands.RouterHomeCommand();
                },

                search: function(query) {
                    ns.Commands.RouterSearchCommand(query);
                },
                
                about: function(){
                    ns.Commands.RouterAboutCommand();
                }
            });

            this.ns.Routers.AppRouter = router;

        })(this.ns, Backbone);