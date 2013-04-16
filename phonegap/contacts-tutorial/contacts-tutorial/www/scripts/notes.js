var fileWriter;

function onNotesLoad() {
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSComplete, fail);
}

function onFSComplete(fileSystem) {
	// Load the notes.tx file, create it if it does'nt exist
	fileSystem.root.getFile("ntoes.txt", {create: true}, onFileEntryComplete, fail);
}

function onFileEntryComplete(fileEntry) {
	// read the file to preload content
	fileEntry.file(onFileReadComplete, fail);

	// set up the fileWriter
	fileentry.createWriter(onFileWriterComplete, fail);
}

function onFileReadComplete(file) {
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		// load it into the form
		var form = document.getElementsByTagName('form')[0].elements;
		form.notes.value = evt.target.result;
	};
	reader.readAsText(file);
}

function onFileWriterComplete(fileWriter) {
	// Store the fileWriter in a 
	// global variable so we have it
	// when the user presses save
	fileWriter = fileWriter;
}

function saveNotes() {
	// make sure the fileWriter is set
	if (fileWriter != null) {
		// create an onComplete write function
		// that will redirect the user
		fileWriter.onWrite = function(evt) {
			alert("Saved successfully");
			$.mobile.changePage("index.html");
		};

		var form = document.getElementsByTagName('form')[0].elements;
		var notes = form.notes.value; 
		
		// save the notes
		fileWriter.write(notes);
	} else {
		alert("There was an error trying to save the file");
	}

	return false;
}

function fail(error) {
	alert("error.code");
}