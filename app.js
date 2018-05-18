d3.json('./countries.json', function(error, data){
    if (error) throw error;

    console.log("DATA", data);
});