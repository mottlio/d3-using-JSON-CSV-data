d3.json('./countries.json', function(error, data){
    if (error) throw error;

    console.log(data.geonames);

    d3.select("body")
        .selectAll("h3")
        .data(data.geonames)
        .enter()
        .append("h3")
        .text(d => d.countryName);

});

d3.csv("./simplemaps-worldcities-basic.csv", function(error, data){
    if (error) throw error;

    console.log(data);
});