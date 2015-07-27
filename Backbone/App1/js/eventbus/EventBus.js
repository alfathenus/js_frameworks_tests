(function(ns, Backbone) {

    var EventBus = function() {

    }
    
    EventBus.prototype.trigger = function(value) {
        var event = (value instanceof ns.Models.EventModel) ? event : new ns.Models.EventModel(value);
        if (event.get("type")) {
            Backbone.Events.trigger(event.get("type"), event);
        }
    }
    
    EventBus.prototype.on = function(type, callback, context) {
        Backbone.Events.on(type, callback, context);
    }
    
    EventBus.prototype.off = function(type, callback, context) {
        Backbone.Events.off(type, callback, context);
    }
    
    ns.EventBus = new EventBus();

})(this.ns, Backbone)