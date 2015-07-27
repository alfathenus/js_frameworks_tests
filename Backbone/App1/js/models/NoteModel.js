(function(ns, Backbone){
	ns.Models.NoteModel = Backbone.Model.extend({
		defaults: {
			id:null, title:null, desc:null
		}
	});
})(this.ns, Backbone)