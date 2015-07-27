(function(ns, Backbone, _){
    ns.Views.NotesListView = Backbone.View.extend({
        el: "#listado",
        
        initialize:function(){
            Backbone.Events.on(ns.Events.NoteEvent.LIST_CHANGE, _.bind(this.render, this));
            this.tpl = _.template($('#note-item-tpl').html());
        },
        
        render:function(event){
            console.log("render");
            this.$el.empty();
            var list = event.get("data");
            var self = this;
            _.each(list.models, function(item){
                self.$el.append(self.tpl(item.attributes));
            });
        }
    });
})(this.ns, Backbone, _);