This project extracts data in JSON and CSV formats for use with D3. Data from both files is combined and later filtered.

JSON file includes information on countries.

CSV file includes information about cities.

Notes:

**d3.json(url, callback(error, data))** method makes a request to a JSON file, parses JSON and returns a valid JS object, CALLBACK is invoked once a response to the request is received.

to make JSON requests - need to be working over HTTP, not the file system. Need to run a server.

Data can only be accessed INSIDE of the callback.

**d3.csv(url, callback(error, data))** makes a request to a CSV file and transforms it to a valid JavaScript file.
The .csv method returns each row as an object. Properties are STRINGS by default. To change this, another callback can be passed: FORMATTER callback

**d3.csv(url, formatter, callback)** formatter is run before the second callback and returns data in the desired format to the second (main) callback.

**formatter callback** - accepts 3 arguments:
function(row, i, headers){}
- row: current CSV row as an object
- i - row index
- headers - array of csv headers (also keys in the row object)




