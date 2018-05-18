Project URL: https://mottlio.github.io/d3-using-JSON-CSV-data/

Note: to see full functionality clone locally and run a HTTP server. 

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

This method can REMOVE ROWS before working with data - if it returns null or undefined.

Other request methods:

d3.text
d3.tsv
d3.html
d3.xml
d3.request

**D3.QUEUE( )**
a method to combine data coming from various requests. Normally data is only available within the callback. 
Returns a D3 queue object which is used to manage asynchronous tasks.

queue.defer(function, arguments)
queue.await() -> makes responses available as a comma-separated list of arguments
queue.awaitAll() -> gives an array of responses