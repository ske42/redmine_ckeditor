CKEDITOR.plugins.add( 'spoiler' , {
	lang: 'en,ru',
	icons: 'spoiler',
	init: function( editor ) {
		if ( editor.blockless )
			return;


		function createSpoiler() {
			var tpl_id = Math.random().toString(36).substr(2, 9);
			var spoilerContainer = editor.document.createElement( 'div', { 'attributes' : { 'class': 'spoiler' } } );

			spoilerContainer.appendHtml('<span class="collapsible" id="collapse-'+tpl_id+'-hide">'+ editor.lang.spoiler.hide + '</span>');
			spoilerContainer.appendHtml('<span style="display:none" class="collapsible collapsed" id="collapse-'+tpl_id+'-show">'+ editor.lang.spoiler.show + '</span>');
			spoilerContainer.appendHtml('<div id="collapse-'+tpl_id+'" style="padding 10px;"><br/></div>');
			return spoilerContainer;
		}


		editor.addCommand( 'spoiler', {
			exec: function( editor ) {
				var spoiler = createSpoiler();
				editor.insertElement( spoiler );
			},
			allowedContent: '*(*)'
		});

		editor.ui.addButton( 'Spoiler', {
			label: editor.lang.spoiler.toolbar,
			command: 'spoiler',
			toolbar: 'insert'
		});

	}
});