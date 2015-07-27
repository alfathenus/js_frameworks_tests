(function($, _, Backbone, App, ns){
		
	$(function(){
        App.init();
		App.Add([
			new ns.Models.NoteModel({id:1, titulo:"Titulo 1", desc:"Descripcion 1"}),
			new ns.Models.NoteModel({id:2, titulo:"Titulo 2", desc:"Descripcion 2"}),
			new ns.Models.NoteModel({id:3, titulo:"Titulo 3", desc:"Descripcion 3"})
		]);
		
		console.log(App.notes.toJSON());
	});
})(jQuery, _, Backbone, App, ns);