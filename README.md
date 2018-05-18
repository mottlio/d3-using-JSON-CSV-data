This project extracts data in JSON and CSV formats for use with D3. Data from both files is combined and later filtered.

JSON file includes information on countries.

CSV file includes information about cities.

Notes:

**d3.json(url, callback(error, data))** method makes a request to a JSON file, parses JSON and returns a valid JS object, CALLBACK is invoked once a response to the request is received.

to make JSON requests - need to be working over HTTP, not the file system. Need to run a server.

Data can only be accessed INSIDE of the callback.

