(function(ns, $, Backbone) {
    
    var tooltip = null;
    
    ns.Views.FaceView = Backbone.View.extend({
        el: "#face",
        events: {
            'mouseover': 'showTooltip',
            'mouseout': 'returnFace'
        },
        showTooltip: function(){
            this.$el.attr("src","assets/face2.png");
            new Backbone.Tooltip(this.$el);
        },
        returnFace: function(){
           this.$el.attr("src","assets/face.png"); 
        }
    });
})(this.ns, jQuery, Backbone);