(function(ns, Backbone){
	ns.Collections.NoteCollection = Backbone.Collection.extend({
		model: ns.Models.NoteModel
	});
})(this.ns, Backbone);