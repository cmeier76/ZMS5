﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

  //  Toolbar: http://docs.cksource.com/CKEditor_3.x/Developers_Guide/Toolbar
  config.toolbar = 'ZMSBasicToolbar';

  config.toolbar_ZMSBasicToolbar =
  [
      ['Format'],
      ['Bold','Italic','Subscript','Superscript','-','Link'],
      ['NumberedList','BulletedList','-','Table'],
      ['Cut','Copy','Paste','PasteText','PasteFromWord'],
      ['Undo','Redo'],
      ['Maximize','-','About']
  ];
	
};
