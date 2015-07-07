(function(ns, Backbone) {
    ns.Models.EventModel = Backbone.Model.extend({
        defaults: {
            target:null,
            data:null,
            type:""
        }
    });
})(this.ns, Backbone);