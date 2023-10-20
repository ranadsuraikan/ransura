// script.js

document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://covid-193.p.rapidapi.com/statistics';
    const apiKey = 'd3a12eee9bmsh16854f7b9c1dc97p1434dcjsne855fa820816';

    async function fetchData(country) {
        try {
            const response = await fetch(`${url}?country=${country}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                }
            });
            const data = await response.json();
            const statistics = data.response[0];

            document.querySelector(".card:nth-child(1) .data").innerText = statistics.cases.active;
            document.querySelector(".card:nth-child(2) .data").innerText = statistics.cases.new;
            document.querySelector(".card:nth-child(3) .data").innerText = statistics.cases.recovered;
            document.querySelector(".card:nth-child(4) .data").innerText = statistics.cases.total;
            document.querySelector(".card:nth-child(5) .data").innerText = statistics.deaths.total;
            document.querySelector(".card:nth-child(6) .data").innerText = statistics.tests.total;
        } catch (error) {
            console.error(error);
        }
    }

    window.searchCountry = function() {
        const countryInput = document.getElementById('countryInput').value;
        fetchData(countryInput);
    }
});
