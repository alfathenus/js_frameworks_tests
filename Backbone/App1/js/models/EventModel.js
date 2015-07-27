(function(ns, _, Backbone) {
    ns.Models.EventModel = function(options){
        this.target = null;
        this.data = null;
        this.type = null;
        
        if (options) _.extend(this, options);
        
        this.get = function(prop) {
            return this[prop];
        }
        
        this.set = function(prop, value) {
            this[prop] = value;
        }
    }
    
})(this.ns, _, Backbone);