const COMPANIES = {
    "Reddit": {
        "size": "med",
        "industry": "tech"
    },
    "Gitlab": {
        "size": "lg",
        "industry": "tech"
    },
    "Betterment": {
        "size": "sm",
        "industry": "fin"
    },
    "Birchbox": {
        "size": "med",
        "industry": "bty"
    },
    "Thrillist": {
        "size": "med",
        "industry": "mda"
    }
};

const IGNORED_COLUMNS = [
    "size",
    "industry",
    "absolute_url"
];

var JOBS = []


window.addEventListener('load', function () {
    new Vue({
        el: '#app',
        data: {
            loading: true,
            location: null,
            locations: [
                "San Francisco",
                "New York",
                "Chicago",
                "Remote"],
            size: null,
            sizes: [
                { text: "Small", value: "sm" },
                { text: "Medium", value: "med" },
                { text: "Large", value: "lg" }
            ],
            industry: null,
            industries: [
                { text: "Tech", value: "tech" },
                { text: "Media", value: "mda" },
                { text: "Beauty", value: "bty" },
                { text: "Finance", value: "fin" }
            ],
            titleSearch: null,
        },
        computed: {
            cols() {
                return JOBS.length >= 1 ? Object.keys(JOBS[0]).filter(j => !IGNORED_COLUMNS.includes(j)) : []
            },
            colHeaders() {
                return this.cols.map(c => capitalizeFirstLetter(c))
            },
            rows() {
                if (!JOBS.length) {
                    return []
                }

                return JOBS.filter(job => {
                    var locationContains = !this.location || this.location && job['location'].toLowerCase().includes(this.location.toLowerCase())
                    var industryContains = !this.industry || this.industry && job['industry'].toLowerCase().includes(this.industry.toLowerCase())
                    var sizeContains = !this.size || this.size && job['size'].toLowerCase().includes(this.size.toLowerCase())
                    var titleContains = !this.titleSearch || this.titleSearch && job['title'].toLowerCase().includes(this.titleSearch.toLowerCase())

                    return titleContains && locationContains && industryContains && sizeContains
                })
            }
        },
        mounted() {
            getJobsFuncs = Object.keys(COMPANIES).map(c => getJobs(c))
            Promise.all(getJobsFuncs).then(_ => this.loading = false)
        }
    })
});

async function getJobs(company) {
    var response = await axios.get("https://boards-api.greenhouse.io/v1/boards/" + company + "/jobs")
    response['data']['jobs'].forEach(function (item) {
        var job = {};
        job['company'] = company;
        job['size'] = COMPANIES[company]['size'];
        job['industry'] = COMPANIES[company]['industry'];
        job['title'] = item['title'];
        job['location'] = item['location']['name'];
        job['absolute_url'] = item['absolute_url'];
        JOBS.push(job);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}