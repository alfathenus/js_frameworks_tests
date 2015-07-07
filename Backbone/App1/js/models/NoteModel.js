(function(ns, Backbone){
	ns.Models.NoteModel = Backbone.Model.extend({
		defaults: {
			id:null, titulo:null, desc:null
		}
	});
})(this.ns, Backbone)