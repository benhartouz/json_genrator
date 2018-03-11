import React from 'react';
import JsonEditor from './JsonEditor';
import Freezer from 'freezer-js';

var json = {};

// Create a Freezer store
var frozen = new Freezer( { json: json });

const App = () => (
    <JsonEditor store={ frozen.get() } original={ frozen.get() } frozen={frozen}/>
);

export default App;