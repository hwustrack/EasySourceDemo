JOBS = {
    "reddit": {
        "size": "med",
        "industry": "tech"
    }
}

window.addEventListener('load', function () {
    httpGetAsync("https://boards-api.greenhouse.io/v1/boards/reddit/jobs", showJobs)
});

function showJobs(data) {
    console.log(data);

    var formatted = formatData(data["jobs"]);
    var table = dataToTable(formatted);

    document.getElementById('jobs-table').innerHTML = table;
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function formatData(data) {
    var formatted = removeNestedKey(data, "location", "name");
    formatted = _.map(formatted, function (o) { return _.pick(o, 'title', 'location'); });
    return formatted;
}

function removeNestedKey(obj, parent, child) {
    obj.forEach(function (item) {
        item[parent] = item[parent][child];
    });
    return obj;
}

function dataToTable(data) {
    var cols = Object.keys(data[0]);
    var headerRow = '';
    var bodyRows = '';

    cols.map(function (col) {
        headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
    });

    data.map(function (row) {
        bodyRows += '<tr>';
        cols.map(function (colName) {
            bodyRows += '<td>' + row[colName] + '<td>';
        });
        bodyRows += '</tr>';
    });

    return '<table>' +
        '<thead><tr>' +
        headerRow +
        '</tr></thead><tbody>' +
        bodyRows +
        '</tbody></table>';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}