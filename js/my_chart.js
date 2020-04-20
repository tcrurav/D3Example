window.onload = initialize;

function initialize() {
    createGraph();
}

function createGraph() {
    d3.xml("xml/values.xml", "application/xml", function (xml) {
        d3.select("#chart")
            .selectAll("div")
            .data(xml.documentElement.getElementsByTagName("value"))
            .enter().append("div")
            .style("width", function (d) { return d.textContent * 10 + "px"; })
            .text(function (d) { return d.textContent; });
    });
}

