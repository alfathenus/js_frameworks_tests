(function(ns, Backbone){
	ns.Collections.NoteCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("BackboneNotes"),
		model: ns.Models.NoteModel
	});
})(this.ns, Backbone);