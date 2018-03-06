import React from 'react';
import JsonEditor from './JsonEditor';
import Freezer from 'freezer-js';

/****************
JSON data to edit
*****************/
var json = {
	hola: 'amigo',
	adios:'enemigo',
	obj: { hi: 'man', bye: 'dude' },
	arr: ['a', 'b', {c: 1}, 'd']
};
// Create a Freezer store
var frozen = new Freezer( { json: json });

const App = () => (
    <JsonEditor store={ frozen.get() } original={ frozen.get() } />
);

export default App;