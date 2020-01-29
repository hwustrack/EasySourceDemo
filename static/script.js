JOBS = {
    "reddit": {
        "size": "med",
        "industry": "tech"
    }
}

window.addEventListener('load', function () {
    addSelectorListeners();
    httpGetAsync("https://boards-api.greenhouse.io/v1/boards/reddit/jobs", showJobs)
});

function addSelectorListeners() {
    const locationSelector = document.getElementById('location-selector');
    locationSelector.addEventListener('change', (event) => {
        filterJobs();
    });

    const sizeSelector = document.getElementById('size-selector');
    sizeSelector.addEventListener('change', (event) => {
        filterJobs();
    });

    const industrySelector = document.getElementById('industry-selector');
    industrySelector.addEventListener('change', (event) => {
        filterJobs();
    });
}

function showJobs(data) {
    var formatted = formatData(data["jobs"]);
    var table = dataToTable(formatted);

    document.getElementById('jobs-table').innerHTML = table;
    filterJobs();
}

function filterJobs() {
    var tbody = document.getElementById('table-body');
    var arr = Array.prototype.slice.call(tbody.getElementsByTagName('tr'));
    arr.forEach(i => i.style.display = 'none');

    var locationEl = document.getElementById('location-selector');
    var selectedLocation = locationEl.options[locationEl.selectedIndex].text;
    arr = getElementsWithText(selectedLocation, 'tr');
    arr.forEach(i => i.style.display = 'table-row');
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

function formatData(data) {
    var formatted = removeNestedKey(data, 'location', 'name');
    formatted = _.map(formatted, function (o) { return _.pick(o, 'title', 'location', 'absolute_url'); });
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

    cols.filter(col => col !== 'absolute_url').map(function (col) {
        headerRow += '<th class="border px-4 py-2">' + capitalizeFirstLetter(col) + '</th>';
    });

    data.map(function (row) {
        bodyRows += '<tr>';
        cols.filter(col => col !== 'absolute_url').map(function (colName) {
            if (colName === 'title') {
                bodyRows += '<td class="border px-4 py-2"><a href="' + row['absolute_url'] + '">' + row[colName] + '</a></td>';
            } else {
                bodyRows += '<td class="border px-4 py-2">' + row[colName] + '</td>';
            }
        });
        bodyRows += '</tr>';
    });

    return '<table class="m-auto">' +
        '<thead><tr>' +
        headerRow +
        '</tr></thead><tbody id="table-body">' +
        bodyRows +
        '</tbody></table>';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getElementsWithText(str, tag) {
    return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim().includes(str.trim()));
}